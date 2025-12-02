# 📸 Image Slider – Simple & Clean Version

A beginner-friendly **Image Slider** built using **HTML, CSS, and JavaScript**, featuring smooth transitions, auto-sliding, and manual navigation.  
Images are loaded from **Picsum Photos** for beautiful random pictures.

---

## ⭐ Features

* Clean and simple layout  
* **Auto-slide** every 3 seconds  
* **Previous / Next** navigation buttons  
* Smooth sliding animation  
* Responsive design  
* Images loaded from **picsum.photos**

---

## 📁 Project Structure

```
index.html     → HTML structure  
style.css      → Styling & animations  
script.js      → Slider functionality  
```

---

## 🎮 How It Works

1. All images are placed inside a sliding container.  
2. JavaScript uses `translateX()` to move between images.  
3. Auto-slide runs every 3 seconds.  
4. Manual navigation using **Prev** and **Next** buttons.  
5. Images come from Picsum API like:  
   ```
   https://picsum.photos/800/400
   ```

---

## 🔘 Buttons

### **Previous (◀)**
* Moves to the previous image.

### **Next (▶)**
* Moves to the next image.

Both work even while auto-slide is running.

---

## 🧠 Logic Overview

* Slider index increases automatically every few seconds.  
* CSS transition creates the smooth sliding effect.  
* Manual buttons change the index immediately.  
* When the last image is reached — slider loops back to the first.

---

## 📌 Customization

Inside CSS, you can change:

* Button styles  
* Slide speed  
* Animation smoothness  
* Image size  
* Border radius and shadows  

Inside JS, you can change:

* Auto-slide delay  
* Button behaviour  
* Number of images  

---

## ✔ Requirements

* Any modern web browser  
* No external libraries required  
* Works offline (except images from Picsum)

---
