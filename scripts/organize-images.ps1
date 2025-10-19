# Script for organizing PrintCore images
# Usage: .\organize-images.ps1

Write-Host "Image Organization Script for PrintCore" -ForegroundColor Green
Write-Host ""

# Create folder structure
$publicPath = "printcore_website\public\images"

Write-Host "Creating folder structure..." -ForegroundColor Cyan
$folders = @(
    "$publicPath\products",
    "$publicPath\gallery", 
    "$publicPath\about",
    "$publicPath\equipment",
    "$publicPath\logos",
    "$publicPath\orders"
)

foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "  Created: $folder" -ForegroundColor Green
    } else {
        Write-Host "  Exists: $folder" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Analyzing images in root directory..." -ForegroundColor Cyan

# Find all images in root
$images = Get-ChildItem -Path . -Include *.jpg,*.png,*.jpeg,*.gif,*.webp -File -Depth 0 -ErrorAction SilentlyContinue

if ($images.Count -eq 0) {
    Write-Host "No images found in root directory." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Images structure is ready at: $publicPath" -ForegroundColor Green
    exit
}

$totalSize = 0
$largeFiles = @()

foreach ($img in $images) {
    $sizeKB = [math]::Round($img.Length / 1KB, 2)
    $totalSize += $sizeKB
    
    if ($sizeKB -gt 1000) {
        $largeFiles += [PSCustomObject]@{
            Name = $img.Name
            Size = $sizeKB
        }
    }
}

Write-Host ""
Write-Host "Statistics:" -ForegroundColor Yellow
Write-Host "  Total files: $($images.Count)"
Write-Host "  Total size: $([math]::Round($totalSize / 1024, 2)) MB"
Write-Host "  Large files (>1MB): $($largeFiles.Count)" -ForegroundColor Red

if ($largeFiles.Count -gt 0) {
    Write-Host ""
    Write-Host "Large files that need optimization:" -ForegroundColor Red
    foreach ($file in $largeFiles) {
        Write-Host "  - $($file.Name): $([math]::Round($file.Size / 1024, 2)) MB" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Recommendations:" -ForegroundColor Green
Write-Host ""
Write-Host "1. Optimize large files:" -ForegroundColor Cyan
Write-Host "   * Open https://squoosh.app"
Write-Host "   * Convert to WebP (quality 80-85)"
Write-Host "   * Target: < 500KB per file"
Write-Host ""
Write-Host "2. Move files to correct folders:" -ForegroundColor Cyan
Write-Host "   * Business cards -> printcore_website\public\images\products\"
Write-Host "   * About us -> printcore_website\public\images\about\"
Write-Host "   * Equipment -> printcore_website\public\images\equipment\"
Write-Host ""
Write-Host "3. Use Cloudinary for large galleries:" -ForegroundColor Cyan
Write-Host "   * Free up to 25GB/month"
Write-Host "   * Automatic optimization"
Write-Host "   * https://cloudinary.com"
Write-Host ""

# Offer automatic migration
Write-Host "Automatic Migration" -ForegroundColor Magenta
Write-Host ""
$migrate = Read-Host "Do you want to automatically move images? (y/N)"

if ($migrate -eq "y" -or $migrate -eq "Y") {
    Write-Host ""
    Write-Host "Migrating images..." -ForegroundColor Green
    
    # Define categories by file names
    $patterns = @{
        "products" = @("business_card", "birki", "broshures", "diploma", "envelop", "fliers", "gift_sert", "menu", "stiker", "trifold")
        "about" = @("about_us", "our_salon", "our_bc", "3d_ours")
        "orders" = @("_order", "_sa.")
        "gallery" = @("photo_", "IMG_", "photo")
        "equipment" = @("konica", "iq501")
    }
    
    $moved = 0
    foreach ($img in $images) {
        $category = "gallery" # default
        
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
            Copy-Item -Path $img.FullName -Destination $newPath -Force
            Write-Host "  Moved: $($img.Name) -> images\$category\" -ForegroundColor Green
            $moved++
        } catch {
            Write-Host "  Error: $($img.Name)" -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Write-Host "Done! Moved files: $moved" -ForegroundColor Green
    Write-Host ""
    Write-Host "IMPORTANT: Originals remain in root" -ForegroundColor Yellow
    Write-Host "After verification, delete them manually!" -ForegroundColor Yellow
    
} else {
    Write-Host ""
    Write-Host "Migration cancelled. Move files manually." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "See IMAGE_STORAGE_GUIDE.md for details" -ForegroundColor Cyan
Write-Host ""
