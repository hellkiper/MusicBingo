from PIL import Image

def remove_black_background(image_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Убираем черный и околочерный цвет (порог 30 для уверенности)
        if item[0] < 35 and item[1] < 35 and item[2] < 35:
            newData.append((0, 0, 0, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(image_path, "WEBP")
    print(f"Processed {image_path} - removed black background.")

if __name__ == "__main__":
    remove_black_background("shapka.webp")


