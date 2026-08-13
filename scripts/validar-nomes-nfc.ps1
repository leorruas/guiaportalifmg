param(
    [string]$Root = (Get-Location).ProviderPath
)

$ErrorActionPreference = "Stop"
$fullRoot = [IO.Path]::GetFullPath($Root)
$badNames = @()
$replacementChar = [char]0xFFFD
$tracked = git -C $fullRoot ls-files

foreach ($relativePath in $tracked) {
    foreach ($name in ($relativePath -split "/")) {
        $isNfc = $name -ceq $name.Normalize([Text.NormalizationForm]::FormC)
        $looksMojibake = $name -match "[\u2500-\u259F]" -or $name.Contains($replacementChar)

        if (-not $isNfc -or $looksMojibake) {
            $badNames += [pscustomobject]@{
                Path = $relativePath
                Nfc = $isNfc
                SuspeitaMojibake = $looksMojibake
            }
        }
    }
}

if ($badNames.Count -gt 0) {
    $badNames | Format-Table -AutoSize | Out-String | Write-Host
    throw "Foram encontrados nomes de arquivo ou pasta fora de NFC ou com sinais de mojibake."
}

Write-Host "OK: nomes de arquivos e pastas em NFC, sem sinais comuns de mojibake."
