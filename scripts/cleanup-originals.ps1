# Cleanup original images from root after migration
# WARNING: This will DELETE files! Use with caution!
# Usage: .\cleanup-originals.ps1

Write-Host "Cleanup Original Images" -ForegroundColor Red
Write-Host ""
Write-Host "WARNING: This will DELETE image files from root directory!" -ForegroundColor Red
Write-Host ""

# Find all images in root
$images = Get-ChildItem -Path . -Include *.jpg,*.png,*.jpeg,*.gif,*.webp -File -Depth 0 -ErrorAction SilentlyContinue

if ($images.Count -eq 0) {
    Write-Host "No images found in root directory. Nothing to clean up." -ForegroundColor Green
    exit
}

Write-Host "Found $($images.Count) images in root directory" -ForegroundColor Yellow
Write-Host ""
Write-Host "Files to be deleted:" -ForegroundColor Yellow
foreach ($img in $images) {
    $sizeKB = [math]::Round($img.Length / 1KB, 2)
    Write-Host "  - $($img.Name) ($([math]::Round($sizeKB / 1024, 2)) MB)" -ForegroundColor Gray
}

Write-Host ""
Write-Host "Total size: $([math]::Round(($images | Measure-Object -Property Length -Sum).Sum / 1MB, 2)) MB" -ForegroundColor Yellow
Write-Host ""

$confirm = Read-Host "Are you SURE you want to delete these files? Type 'DELETE' to confirm"

if ($confirm -eq "DELETE") {
    Write-Host ""
    Write-Host "Deleting files..." -ForegroundColor Red
    
    $deleted = 0
    foreach ($img in $images) {
        try {
            Remove-Item -Path $img.FullName -Force -ErrorAction Stop
            Write-Host "  Deleted: $($img.Name)" -ForegroundColor Green
            $deleted++
        } catch {
            Write-Host "  Error: $($img.Name) - $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Write-Host "Done! Deleted $deleted files" -ForegroundColor Green
    
} else {
    Write-Host ""
    Write-Host "Cleanup cancelled. No files were deleted." -ForegroundColor Yellow
}

Write-Host ""

