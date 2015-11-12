# Chapter 2: HTML
The second step of becoming a full-stack web developer involves learning HTML - *The language that adds structure and content to web-pages.*

## Objectives
We've defined the following objectives:

After this chapter, students will...

1. [use HTML to create a web-page][1]
2. [use hyperlinks to reference HTML documents][2]
3. [use rich media][2]
4. [push their work to Github][4]

### 1 of 4: Markup
The structure of a web-page's content is a reflection of its HTML. If we want content to be presented as a list, we would use the `<li>` tag; if we want content to be presented in a table, we would then use the `<table>` tag. In other words, we can structure content how we want; we need, however, to use the correct tags.

To improve your familiarity with HTML, please complete the following lessons:

1. [Lesson 1: Building Your First Web Page][11]
2. [Lesson 8: Creating Lists][12]
3. [Lesson 11: Organizing Data with Tables][13]

When you're done with these lessons, you'll apply what you've learned to create the following HTML. (This is the HTML you would receive from IMDB if you searched for "Hackers".)

![Result Page for "Hackers" on IMDB ][14]

### 2 of 4: Hyperlinks
A hyperlink, which is created with an `<a>` tag, enables developers to link a web-page to another (or the same) web-page.

To learn how to use hyperlinks, please read [Creating Hyperlinks][21].

After you're done reading, we'll apply this new knowledge to the result's page we created. Please follow these instructions:

1. You will not create a separate page of HTML for each movie title on the result's page. We want, however, you to gain practice with hyperlinks. Please write the code to make each movie title a hyperlink. When the link is clicked, a new tab should open. Using a [relative][22] link, have the tab open to this README.md.

2. You will also not create a separate page of HTML for each actor or actress. To this extent, turn every actor and actress on your result's page into a hyperlink. Have each link be an absolute path the actor or actress' page on IMDB.

### 3 of 3: Rich Media
HTML has the amazing ability to support different types of rich media:

- `<img>`: image
- `<svg>`: vector image
- `<embed>`: embedded video
- `<video>`: native video
- `<canvas>`: graphics
- and more...

Let's get some practice using rich media with [Lesson 9: Adding Media][31]. After you're done with this lesson, include the `<img>` tag into our result's page. Here's the instructions you should follow:

1. Replace each of the image placeholders (`[img placeholder]`) with an`<img>` tag. You'll be provided [images][32] for each of the titles.

2. Set the height and width of each image to **32 x 44 pixels**.

### 4-of-4: Push to Github
We want to see the amazing work you've done, so push your code to Github. If you're unclear how to do this, follow these steps:

1. If you haven't done this, you'll need to create a [fork and clone][41] of this repository.
2. Inside of `_02_html/your-solution`, create a folder with the following naming convention: `[lastName-firstName]`. So your folder structure will look like this: `_02_html/your-solution/lastName-firstName`
3. Inside of the `lastName-firstName` folder, create a file named `index.html`.
4. Add to `index.html` the HTML you've written.
4. Add (`git add -A`) and commit your changes (`git commit -m "Include solution for chapter 1"`).
5. Push your changes to your fork: `git push origin master`
6. Submit a [pull request][42]. Github will send us a notification of your request once it's submitted.

> Here is a great thorough walk-through of this process of submitting a Pull Request: [http://www.codenewbie.org/blogs/how-to-make-a-pull-request](http://www.codenewbie.org/blogs/how-to-make-a-pull-request)

As you continue with the pre-course, build the habit of frequently adding, committing, and pushing your work to your forked repository on Github. This is a good workflow; moreover, it minimizes any chances of losing your valuable work.

## Conclusion
In this chapter, you've built a result's page on IMDB. What you've done so far is awesome, but it lacks style. Let's address this problem and add some to our page. We need to take the next step of web development: [Chapter 3: CSS][next-page]

[1]: #1-of-4-markup
[11]: http://learn.shayhowe.com/html-css/building-your-first-web-page/
[12]: http://learn.shayhowe.com/html-css/creating-lists/
[13]: http://learn.shayhowe.com/html-css/organizing-data-with-tables/
[14]: images/imdb_hackers_html.png
[15]: http://learn.shayhowe.com/html-css/getting-to-know-html/#creating-hyperlinks

[2]: #2-of-4-hyperlinks
[21]: http://learn.shayhowe.com/html-css/getting-to-know-html/#creating-hyperlinks
[22]: http://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/

[3]: #3-of-4-rich-media
[31]: http://learn.shayhowe.com/html-css/adding-media/
[32]: https://github.com/gSchool/prework/tree/master/_02_html/images

[4]: $4-of-4-push-to-github
[41]: https://help.github.com/articles/fork-a-repo/
[42]: https://help.github.com/articles/using-pull-requests/

[next-page]: ../_03_css
