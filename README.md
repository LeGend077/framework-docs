# Overview

Hey! What's Up! It's [LeGend077](//github.com/LeGend077), the creator of the Minecraft CSS framework. I'm going to talk to you in the whole Documentation. 

**About:** This is CSS framework which changes the appearance of a site to Minecraft Bedrock UI and supports all devices as it is responsive! You can't claim it yours but can use this on your website! 

# Installation

By downloading

In order to install it by downloading. Follow the Steps:

1. Click [here](https://github.com/LeGend077/framework-docs/releases/download/releaseV1.05/Beta.1.05.Template.zip) to download it.

2. Find the ZIP file and click extract here.

3. Finally, Open the extracted folder and start coding!

By CDN

```html
<link rel="stylesheet" href="https://unpkg.com/minecraft-framework-css@1.1.0/css/main.css">
```

1. Paste above `link` tag at the top of your html file below the `html` tag.


# Buttons


- To get a Minecraft BE/PE styled button you need to add `.button` class to your `button` element. Unfortunately `.button` class will not work with links but you can still use it with Java Script.    

<button class="button" style="font-family:'Mojang'">Click Me</button>
```html
<button  class="button">Click Me</button>
```

- There is a dark variant of it also. To get dark button, use class `.button-dark` to your `button`  element.

<button class="button-dark" style="font-family:'Mojang'">Click Me</button>

```html
<button class="button-dark">Click Me</button>
```


**Buttons Group**

- To get buttons in group. Use `.inline` in your `<div>` element.

<div class="inline"><button class="button">Button 1</button><button class="button-dark">Button 2</button><button class="button">Button 3</button><button class="button-dark">Button 4</button></div>

```html
<div class="inline">
    <button class="button">Button 1</button>
    <button class="button-dark">Button 2</button>
</div>
```


# Colors and Text


**Background Colors**

- **White**: Use `.bg-white` to lighter the Background.
- **Primary**: Use `.bg-primary` to get a bluish Background.
- **Dark**: Use `.bg-dark` to get a darked Background.
- **Warning**: Use `.bg-warning` to get a warning like Background.
- **Danger**: Use `.bg-danger` to get a Red/Danger Background.

<div class="dialogue-box bg-white text-dark">Background in White!</div>
<div class="dialogue-box bg-primary">Background in Primary!</div>
<div class="dialogue-box bg-dark text-white">Background in Dark!</div>
<div class="dialogue-box bg-warning">Background in Warning!</div>
<div class="dialogue-box bg-danger">Background in Danger!</div>

---

**Texts**

**Centered Text**: Use `.text-center` to center the text.

<div class="text-center" style="font-family:'Mojang'">I'm Centered</div>

```html
<div class="text-center">I'm Centered</div>
```

- **White Text**: Use `.text-white` to lighter the text.
- **Primary Text**: Use `.text-primary` to get a bluish text.
- **Dark Text**: Use `.text-dark` to get a darked text.
- **Warning Text**: Use `.text-warning` to get a warning like text.
- **Danger Text**: Use `.text-danger` to get a Red/Danger text.


# Header

- To get a header, use `.header` class. In the header, the text is centered.

<div class="header" style="font-family:'Mojang';word-spacing:var(--w-spacing) ;
line-height:var(--l-spacing);">Hello! How are you?</div>

```html
<div class="header">
    ... ... ...
</div>
```



# Title

- Title is a bigger text. Use `.title` class.

<div class="title" style="font-family:'Mojang'">Minecraft</div>

```html
<label class="title">Minecraft</label>
<div class="title">Minecraft</div>
```


# Container

- `.container` class adds some margin, padding and a simple background.

<div class="container" style="word-spacing:var(--w-spacing);line-height:var(--l-spacing);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

```html
<div class="container">
 ... ... ...
</div>
```

# Dialogue Box

- With `.dialogue-box` class you can get Minecraft like Box Borders.

<div class="dialogue-box">I'm Good! How are you? I think you are good!</div>

```html
<div class="dialogue-box">
    I'm Good! How are you? I think you are good!
</div>
```

# Image Border

- `.img` class adds a simple border around it.

<img src="https://www.minecraft.net/content/dam/games/minecraft/background-images/pmp-hero-minecraft.jpg" class="img">

```html
<img class="img"  src="lol.png" alt="...">
```

# Links

**Default  Link**: By using `a` element.

<a href="#" class="link-white" style="color:black;word-spacing:var(--w-spacing) ;
line-height:var(--l-spacing);font-family:'Mojang'">Link</a>

```html
<a href="#">Link</a>
```

**White Link**: By using `.link-white` class.

<a href="#" class="link-white" style="var(--w-spacing) ;background:black;padding:5px;
line-height:var(--l-spacing);font-family:'Mojang'">Link</a>

```html
<a href="#" class="link-white">Link</a>
```

# Forms

(Beta In progress)

- To get Minecraft BE/PE text input, use `.input-text` class in your `input` element with type `text`.

<input type="text" class="input-text" name="text" placeholder="Type....">


# Responsiveness

<img src="https://raw.githubusercontent.com/LeGend077/framework-docs/main/responsive1.PNG">

---

<img src="https://raw.githubusercontent.com/LeGend077/framework-docs/main/responsive2.PNG">

# What's Next?

> It is the V1.05 Beta of the Framework. More features will come in V1.1! Tell me bugs at discord or on github. Tell me if you want Mojang font tutorial.
