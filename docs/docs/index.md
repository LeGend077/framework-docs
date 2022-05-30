---
title: Documentation
---

<!-- <link rel="stylesheet" href="https://unpkg.com/minecraft-framework-css@1.1.7/css/main.css"> -->

<style>
.container{
    background-color: white !important;
}
</style>

## Overview

Hey! What's Up! It's [LeGend077](https://github.com/LeGend077), the creator of the Minecraft CSS framework. I'm going to talk to you in the whole Documentation.

NPM Package: [https://www.npmjs.com/package/minecraft-framework-css](https://www.npmjs.com/package/minecraft-framework-css).

::: warning
Always use the latest version of package! Latest Version: v1.1.8.
:::

## Installation

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/minecraft-framework-css@1.1.8/css/main.css">
```

```html
<script src="https://unpkg.com/minecraft-framework-css@1.1.8/css/assets/script.js"></script>
```

1. Paste above `<link>` tag at the top of your html file below the head tag.
2. Paste the above `<script>` tag at the bottom of your body tag.

## Buttons

### Bedrock Buttons

#### Normal

- To get a Minecraft BE/PE styled button you need to add `.button` class to your `button` element. Unfortunately, `.button` class will not work with links but you can still use it with Java Script.

<button class="button">Click Me</button>

```html
<button class="button">Click Me</button>
```

#### Dark

- There is a dark variant of it also. To get dark button, use class `.button-dark` to your `button` element.

<button class="button-dark">Click Me</button>

```html
<button class="button-dark">Click Me</button>
```

### Java Buttons

#### Normal

- To get a Minecraft Java Edition (New) styled button you need to add `.button-java` class to your `button` element. Unfortunately, `.button-java` class will not work with links but you can still use it with Java Script.

<button class="button-java">Click Me</button>

```html
<button class="button-java">Click Me</button>
```

#### Old

- To get a Minecraft Java Edition (Old) styled button you need to add `.button-java-old` class to your `button` element.

<button class="button-java-old">Click Me</button>

```html
<button class="button-java-old">Click Me</button>
```

#### Full Width

- There is also more width style of Java buttons. Add `-w` to the classes. Warning: They might be broken because of the styling of the Documentation.

<button class="button-java-w">Click Me</button>
<button class="button-java-w-old">Click Me</button>

```html
<button class="button-java-w">Click Me</button>
<button class="button-java-w-old">Click Me</button>
```

**Button Group**

<div class="inline">
     <button class="button">Button 1</button>
    <button class="button-dark">Button 2</button>
</div><br/><br><br><br>

```html
<div class="inline">
    <button class="button">Button 1</button>
    <button class="button-dark">Button 2</button>
</div>
```

#### Button Sounds (Java Script)

- There is click sound in Minecraft called random.click which is for button click. So, to add this to your `button`, you need to add `onclick` event: `onclick="soundOn()"`. Make sure that you linked the Script tag to your file!

<button class="button" onclick="soundOn()">Click Me</button>
<button class="button-java" onclick="soundOn()">Click Me</button>

```html
<button class="button" onclick="soundOn()">Click Me</button>
<button class="button-java" onclick="soundOn()">Click Me</button>
```

## Colors and Text

### **Background Colors**

White: Use `.bg-white` to lighter the Background.

Primary: Use `.bg-primary` to get a bluish Background.

Dark: Use `.bg-dark` to get a darked Background.

Warning: Use `.bg-warning` to get a warning like Background.

Danger: Use `.bg-danger` to get a Red/Danger Background.

<div class="bg-white">Background in White!</div>
<div class="bg-primary">Background in Primary!</div>
<div class="bg-dark text-white">Background in Dark!</div>
<div class="bg-danger">Background in Danger!</div>
<div class="bg-warning">Background in Warning!</div>

<hr>

### **Texts**

Centered Text: Use `.text-center` to center the text.

<div class="text-center">I'm Centered</div>

```html
<div class="text-center">I'm Centered</div>
```

### **Text Colors**


<label class="text-white bg-dark">White</label> Text: Use `.text-white` to lighter the text.

<label class="text-primary">Primary</label> Text: Use `.text-primary` to get a bluish text.

<label class="text-dark">Dark</label> Text: Use `.text-dark` to get a darked text.

<label class="text-warning">Warning</label> Text: Use `.text-warning` to get a warning like text.

<label class="text-danger">Danger</label> Text: Use `.text-danger` to get a Red/Danger text.

## Header

- To get a header, use `.header` class. In the header, the text is centered.

<div class="header">
    Hello! How are you?
</div>

```html
<div class="header">
    ...
</div>
```

## Title

- Title is a bigger text. Use `title` class.

<label class="title">Minecraft</label>

```html
<label class="title">Minecraft</label>
<div class="title">Minecraft</div>
```

## Container

- `.container` class adds some margin, padding and a simple background.

<div class="container" style="background-color: #ececec !important">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>

```html
<div class="container">
 ...
</div>
```

## Dialogue Box

- With `.dialogue-box` class you can get Minecraft like Box Borders.

<div class="dialogue-box">
    I'm Good! How are you? I think you are good!
</div>

```html
<div class="dialogue-box">
    I'm Good! How are you? I think you are good!
</div>
```

## Image Border

- `.img` class adds a simple border around it.

<img class="img" src="https://www.minecraft.net/content/dam/games/minecraft/background-images/pmp-hero-minecraft.jpg">

```html
<img class="img" src="image.png" alt="...">
```

## Link

- Default Link: By using `a` element.

<a href="#link">Link</a>

```html
<a href="#">Link</a>
```

- White Link: By using `.link-white` class.

<a href="#" class="link-white bg-dark">Link</a>

```html
<a href="#" class="link-white">Link</a>
```

## Forms

(Work in Progress)

**Text Input**

- To get Minecraft BE/PE text input, use `.input-text` class in your `input` element with type text.

<input type="text" class="input-text">

**Toggle/Checkbox**

- To get a checkbox/toggle, use `<input type="checkbox">`.

<input type="checkbox">

- To get a (new) checkbox/toggle, use `<input type="checkbox" class="new">`.

<input type="checkbox" class="new">

**Slider**

- To get a MCBE 'Slider', use `<input type="range">`. Note : The Slider can be glitched here.

<input type="range">

**Dropdown**

- To get a dropdown like MCBE -

<select name="dropdown" id="dropdown">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
</select>

```html
<select name="dropdown" id="dropdown">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
</select>
```

## Server Forms

As, there are server forms in servers like Hive etc. And you also have seen them. Here are the Web Ones!

::: warning
Server Forms are not created to like just copy pasting! You've to use your CSS and HTML also!
:::

- To have a simple form, add `server-form` class to your `div`, `p` or `form` element. Inside this you can have your buttons etc.

<form class="server-form">
    <label>Choose the Options!</label>
    <button class="button full-width">Click Me</button>
    <button class="button full-width">Go Back</button>
</form>

```html
<form class="server-form">
    <label>Choose the Options!</label>
    <button class="button full-width">Click Me</button>
    <button class="button full-width">Go Back</button>
</form>
```

- To have a form with title, add `server-form-with-title` class to your `div`, `p` or `form` element. Inside this you can have your buttons etc.

Add `form-title` class to a `div`, where you can add your title.

<form class="server-form-with-title">
    <div class="form-title">Choose the Options</div><br>
    <button class="button full-width">Click Me</button>
    <button class="button full-width">Go Back</button>
</form>

```html
<form class="server-form-with-title">
    <div class="form-title">Choose the Options</div><br>
    <button class="button full-width">Click Me</button>
    <button class="button full-width">Go Back</button>
</form>
```

## Cursors

Well as you know, In MCBE, there are custom cursors.

- To have custom cursors, you need to add `cursor` attribute to a particular element or to the body. Cursor attribute is with three options:

`cursor="arrow"`- Cursor Appearance as Minecraft Arrow

`cursor="pointer"`- Cursor Appearance as Pointer(used in consoles, ps4 etc)

`cursor="default"`- Cursor Appearance as Default.

<div class="container" cursor="arrow">Hover on me</div>
<div class="container" cursor="pointer">Hover on me</div>
<div class="container" cursor="default">Hover on me</div>

```html
<div class="container" cursor="arrow">Hover on me</div>
<div class="container" cursor="pointer">Hover on me</div>
<div class="container" cursor="default">Hover on me</div>
```

## Responsiveness

![](https://raw.githubusercontent.com/LeGend077/framework-docs/main/responsive1.PNG)

![](https://raw.githubusercontent.com/LeGend077/framework-docs/main/responsive2.PNG)

## What's Next

> Now, Start building your site! It is the v1.1.8 of the framework. Version 1.1.9 will come with other/more features.
