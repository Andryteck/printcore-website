# Check image distribution after migration
# Usage: .\check-images.ps1

Write-Host "Image Distribution Check" -ForegroundColor Green
Write-Host ""

$publicPath = "printcore_website\public\images"

if (-not (Test-Path $publicPath)) {
    Write-Host "Error: Images folder not found at $publicPath" -ForegroundColor Red
    Write-Host "Run .\organize-images.ps1 first" -ForegroundColor Yellow
    exit
}

$categories = @("products", "gallery", "about", "equipment", "logos", "orders")

Write-Host "Image Distribution:" -ForegroundColor Cyan
Write-Host ""

$totalFiles = 0
$totalSize = 0

foreach ($cat in $categories) {
    $path = Join-Path $publicPath $cat
    
    if (Test-Path $path) {
        $files = Get-ChildItem -Path $path -Include *.jpg,*.png,*.jpeg,*.gif,*.webp -File -ErrorAction SilentlyContinue
        $size = ($files | Measure-Object -Property Length -Sum).Sum
        $sizeKB = [math]::Round($size / 1KB, 2)
        
        $totalFiles += $files.Count
        $totalSize += $sizeKB
        
        if ($files.Count -gt 0) {
            Write-Host "$cat/" -ForegroundColor Yellow
            Write-Host "  Files: $($files.Count)" -ForegroundColor White
            Write-Host "  Size: $([math]::Round($sizeKB / 1024, 2)) MB" -ForegroundColor Gray
            
            # Show first 5 files
            $displayCount = [Math]::Min($files.Count, 5)
            for ($i = 0; $i -lt $displayCount; $i++) {
                $f = $files[$i]
                $fSize = [math]::Round($f.Length / 1KB, 2)
                Write-Host "    - $($f.Name) ($([math]::Round($fSize / 1024, 2)) MB)" -ForegroundColor Gray
            }
            
            if ($files.Count -gt 5) {
                Write-Host "    ... and $($files.Count - 5) more" -ForegroundColor DarkGray
            }
            
            Write-Host ""
        }
    }
}

Write-Host "Total:" -ForegroundColor Green
Write-Host "  Files: $totalFiles"
Write-Host "  Size: $([math]::Round($totalSize / 1024, 2)) MB"

Write-Host ""

# Check root directory
$rootImages = Get-ChildItem -Path . -Include *.jpg,*.png,*.jpeg,*.gif,*.webp -File -Depth 0 -ErrorAction SilentlyContinue

if ($rootImages.Count -gt 0) {
    Write-Host "WARNING: $($rootImages.Count) images still in root directory" -ForegroundColor Red
    $rootSize = ($rootImages | Measure-Object -Property Length -Sum).Sum
    Write-Host "         Size: $([math]::Round($rootSize / 1MB, 2)) MB" -ForegroundColor Red
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "  1. Verify migrated files in $publicPath" -ForegroundColor White
    Write-Host "  2. Run .\cleanup-originals.ps1 to remove root images" -ForegroundColor White
} else {
    Write-Host "Root directory is clean!" -ForegroundColor Green
}

Write-Host ""

