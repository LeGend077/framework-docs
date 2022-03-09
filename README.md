# Overview

Hey! What's Up! It's [LeGend077](//github.com/LeGend077), the creator of the Minecraft CSS framework. I'm going to talk to you in the whole Documentation. 

**About:** This is CSS framework which changes the appearance of a site to Minecraft Bedrock UI and supports all devices as it is responsive! You can't claim it yours but can use this on your website! 

# Installation

There are two ways to install it.

- **First** with Git

In order to Install it from Git. Follow the Steps:

1. Open a folder in your Vscode or IDE.

<img src="https://raw.githubusercontent.com/LeGend077/framework-docs/main/tu1.PNG">

2. Open Terminal

<img src="https://raw.githubusercontent.com/LeGend077/framework-docs/main/tu2.PNG">

3. Now, Type the following command `git clone https://github.com/LeGend077/template.git` and hit enter.

<img src="https://raw.githubusercontent.com/LeGend077/framework-docs/main/tu3.PNG">

4. It is done, Open the index.html to start coding!

<img src="https://raw.githubusercontent.com/LeGend077/framework-docs/main/tu4.PNG">

- **Second** by downloading

In order to install it by downloading. Follw the Steps:

1. Open your browser and Go to `https://github.com/LeGend077/template` .

2. Now, Click the Code button at center and Click download as ZIP.

3. Find the ZIP file and click extract here.

4. Finally, Open the extracted folder and start coding!

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

<div class="container" style="font-family:'Mojang';word-spacing:var(--w-spacing) ;
line-height:var(--l-spacing);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

```html
<div class="container">
 ... ... ...
</div>
```

# Image Border

- `.img` class adds a simple border around it.

<img src="https://www.minecraft.net/content/dam/games/minecraft/background-images/pmp-hero-minecraft.jpg" class="img">

```html
<img class="img"  src="lol.png" alt="...">
```

# Text

**Centered Text**: Use `.text-center` to center the text.

<div class="text-center" style="font-family:'Mojang'">I'm Centered</div>

```html
<div class="text-center">I'm Centered</div>
```

**White Text**: Use `.text-white` to lighter the text.

<div class="text-white" style="background-color:black ;font-family:'Mojang'">I am white</div>

```html
<div class="text-white" style="background-color:black">I am white</div>
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
# Responsiveness

<img src="https://raw.githubusercontent.com/LeGend077/framework-docs/main/responsive1.PNG">

---

<img src="https://raw.githubusercontent.com/LeGend077/framework-docs/main/responsive2.PNG">

# What's Next?

> It is the V1.0 of the Framework. More features will come in V2.0! Tell me bugs at discord or on github. Tell me if you want Mojang font tutorial.
