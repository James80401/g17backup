# Chapter 1: Tools
The first step of becoming a full-stack developer is learning the tools of our trade.

## Objectives
We've defined the following objectives:

After this chapter, students will...

1. [understand the value of keyboard commands][1]

3. [understand basic Unix commands][3]
4. [install Sublime Text][4]
5. [understand basic Git commands][5]
6. [link Git with Github][6]

### 1 of 6: The Value of Keyboard Commands
You'll quickly learn that the primary tool of our trade is the keyboard. This tool is so valuable to us that we use it as much as possible. If there's a keyboard command that we can use instead of a trackpad or mouse, then we'll prefer the keyboard. This reality may shock you, especially the thought that you may have to become highly proficient using the keyboard. There's a reason, however, why you should embrace this practice: Keyboard commands make us more efficient.

Learning a single keyboard command, such as opening [Spotlight][11], can save you seconds from clicking and scrolling through several items. If we consider that a developer will open Spotlight dozens of times on a typical day, we'll notice that the seconds from this one shortcut will save us minutes. Imagine the amount of time you would save if you learned more commands. Those extra minutes, and eventually hours, could be spent on something better, such as raiding the pantry!

In the rest of this document, you'll be introduced to the keyboard commands that will save you a lot of time during your daily workflow at gSchool.

### 2 of 6: OS X Keyboard Commands
The following commands are some of the most useful you can learn:

- opening Spotlight
    1. ⌘ + Spacebar

- opening Terminal
    1. Spotlight
    2. "ter" + Enter

- opening [Sublime](http://www.sublimetext.com/)
    1. Spotlight
    2. "subl" + Enter

- opening Chrome
    1. Spotlight
    2. "chr" + Enter

- taking a screenshot
    1. ⌘ + Shift + 4
    2. drag your cursor over the desired section of your screen

- changing tabs of a browser window
    1. ⌘ + Option + ◀ (or) ▶
    2. ⌘ + Option + [the position of the tab in your browser window]

- creating the Apple Logo 
    1. Option + Shift + K

### 3 of 6: Unix Commands
Every developer will perform certain tasks--navigating a file system, viewing files of a directory, etc. The following commands will help you complete these tasks.

> To use Unix commands, you'll need to open a command-line interface, such as the [Terminal][2].

1. Navigating through a directory
  - `cd [argument]`
1. Viewing files and directories
  - `ls [flag]`
1. Creating a file
  - `touch [filename]`
1. Creating a directory
  - `mkdir [directory]`
1. Reading a file
  - `cat [filename]`
1. Opening a file or directory
  - `open [filename or directory]`
1. Deleting a file
  - `rm [filename]`
1. Deleting a directory
  - `rm -rf [directory]`

*Be sure to read over [this][31] quick tutorial to learn even more useful commands.*

### 4 of 6: Sublime Text
Every web developer needs a text editor; it's a developer's most dangerous weapon. The text editor of choice, especially for new developers, is Sublime Text. We can understand the rationale: it's easy to use, it provides core functionality, such as syntax highlighting, and it can be further customized. For this reasons, we want you to [install it][41].

### 5 of 6: Git Commands
In the most simplistic of terms, Git manages different [versions of files][54]. Git does this amazingly well, and it's the reason why [most web-based companies use Git][51] to manage their codebases.

In this section, we'll introduce two of the most popular resources for learning Git: [Code School's Try Git][52] and [Atlassian's Getting Started][53]

### 6 of 6: Git with Github
Git repositories can be stored online using Github, an extremely popular hosting service. To deploy your Git repositories to Github, please follow these steps:

1. Create a Github [account][61]
2. Generate an [SSH key][62]
3. Create a [Github Repository][63]
4. Go through this tutorial to learn about the Pull-Request workflow: [https://github.com/asmeurer/git-workflow](https://github.com/asmeurer/git-workflow)

*Additional Resources*: [Atlassian's Collaborating][64]

# Conclusion
You've done it! You've acquired the basic tools of a web developer. We're ready to take the next step of the pre-course: [Chapter 2: HTML][next-page].

[1]: #1-of-6-the-value-of-keyboard-commands
[11]: https://en.wikipedia.org/wiki/Spotlight_(software)

[2]: #2-of-6-os-x-keyboard-commands
[21]: https://www.shortcutfoo.com/

[3]: #3-of-6-unix-commands
[31]: http://mac.appstorm.net/how-to/utilities-how-to/how-to-use-terminal-the-basics/

[4]: #4-of-6-sublime-text
[41]: http://www.sublimetext.com/3

[5]: #5-of-6-git-commands
[51]: http://git-scm.com/#companies-projects
[52]: https://try.github.io/levels/1/challenges/1
[53]: https://www.atlassian.com/git/tutorials/setting-up-a-repository
[54]: https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control

[6]: #6-of-6-git-with-github
[61]: https://github.com/join
[62]: https://help.github.com/articles/generating-ssh-keys/
[63]: https://help.github.com/articles/create-a-repo/
[64]: https://www.atlassian.com/git/tutorials/syncing

[next-page]: ../_02_html
