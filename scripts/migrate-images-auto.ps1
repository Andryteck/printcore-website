# Automatic image migration (no prompt)
# Usage: .\migrate-images-auto.ps1

Write-Host "Automatic Image Migration" -ForegroundColor Green
Write-Host ""

$publicPath = "printcore_website\public\images"

# Check if folders exist
if (-not (Test-Path $publicPath)) {
    Write-Host "Error: Run .\organize-images.ps1 first to create folder structure" -ForegroundColor Red
    exit
}

# Find all images in root
$images = Get-ChildItem -Path . -Include *.jpg,*.png,*.jpeg,*.gif,*.webp -File -Depth 0 -ErrorAction SilentlyContinue

if ($images.Count -eq 0) {
    Write-Host "No images found in root directory." -ForegroundColor Yellow
    exit
}

Write-Host "Found $($images.Count) images to migrate" -ForegroundColor Cyan
Write-Host ""

# Define categories by file names
$patterns = @{
    "products" = @("business_card", "birki", "broshures", "diploma", "envelop", "fliers", "gift_sert", "menu", "stiker", "trifold")
    "about" = @("about_us", "our_salon", "our_bc", "3d_ours")
    "orders" = @("_order", "_sa")
    "equipment" = @("konica", "iq501")
    "logos" = @("logo", "Logo")
}

$stats = @{
    "products" = 0
    "about" = 0
    "orders" = 0
    "equipment" = 0
    "logos" = 0
    "gallery" = 0
}

foreach ($img in $images) {
    $category = "gallery" # default
    
    # Determine category
    foreach ($key in $patterns.Keys) {
        foreach ($pattern in $patterns[$key]) {
            if ($img.Name -like "*$pattern*") {
                $category = $key
                break
            }
        }
        if ($category -ne "gallery") { break }
    }
    
    $destination = Join-Path $publicPath $category
    $newPath = Join-Path $destination $img.Name
    
    try {
        Copy-Item -Path $img.FullName -Destination $newPath -Force -ErrorAction Stop
        $stats[$category]++
        Write-Host "[OK] $($img.Name) -> images\$category\" -ForegroundColor Green
    } catch {
        Write-Host "[ERROR] $($img.Name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Migration Summary:" -ForegroundColor Yellow
Write-Host "  Products: $($stats['products'])"
Write-Host "  About: $($stats['about'])"
Write-Host "  Orders: $($stats['orders'])"
Write-Host "  Equipment: $($stats['equipment'])"
Write-Host "  Logos: $($stats['logos'])"
Write-Host "  Gallery: $($stats['gallery'])"
$total = ($stats.Values | Measure-Object -Sum).Sum
Write-Host "  Total: $total" -ForegroundColor Green

Write-Host ""
Write-Host "IMPORTANT:" -ForegroundColor Yellow
Write-Host "* Images were COPIED (originals remain in root)"
Write-Host "* Verify files in printcore_website\public\images\"
Write-Host "* After verification, delete originals from root"
Write-Host ""
Write-Host "To delete originals, run:" -ForegroundColor Cyan
Write-Host "  .\cleanup-originals.ps1" -ForegroundColor White
Write-Host ""

