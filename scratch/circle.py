from PIL import Image, ImageDraw

def make_circle():
    img = Image.open(r"d:\ice cream\scoopybloom\logourl.jpeg").convert("RGBA")
    
    # Make it a square
    size = min(img.size)
    left = (img.size[0] - size) / 2
    top = (img.size[1] - size) / 2
    right = (img.size[0] + size) / 2
    bottom = (img.size[1] + size) / 2
    img = img.crop((left, top, right, bottom))
    
    # Create mask
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
    
    # Apply mask
    output = Image.new('RGBA', img.size, (0, 0, 0, 0))
    output.paste(img, (0, 0), mask)
    
    # Save as PNG
    output.save(r"d:\ice cream\sundae-atelier\public\logourl.png", "PNG")
    output.save(r"d:\ice cream\scoopybloom\logourl.png", "PNG")

make_circle()
