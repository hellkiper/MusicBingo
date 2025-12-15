# Simple git setup script
Set-Location "C:\Users\Егор Алексеевич\MusicBingo"

# Try to find git
$gitPaths = @(
    "C:\Program Files\Git\bin\git.exe",
    "C:\Program Files (x86)\Git\bin\git.exe",
    "$env:LOCALAPPDATA\Programs\Git\bin\git.exe",
    "git.exe"
)

$gitPath = $null
foreach ($path in $gitPaths) {
    if (Test-Path $path) {
        $gitPath = $path
        break
    }
}

if (-not $gitPath) {
    Write-Host "Git not found. Please install Git first."
    exit 1
}

Write-Host "Using git at: $gitPath"

# Initialize repository
& $gitPath init
Write-Host "Repository initialized"

# Add files
& $gitPath add .
Write-Host "Files added"

# Commit
& $gitPath commit -m "Initial commit for MusicBingo game"
Write-Host "Initial commit created"

# Add remote
& $gitPath remote add origin https://github.com/hellkiper/MusicBingo.git
Write-Host "Remote repository added"

# Push
& $gitPath push -u origin main
Write-Host "Code pushed to GitHub"

Write-Host "Setup complete! Your MusicBingo is now on GitHub."
