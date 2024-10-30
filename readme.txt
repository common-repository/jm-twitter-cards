=== JM Twitter Cards ===
Contributors: jmlapam
Tags: twitter, cards, semantic markup, metabox
Donate Link: https://don.fondationabbepierre.org/b/mon-don?_ga=2.25482229.995513841.1594242995-131201139.1594242995&_cv=1
Requires at least: 4.9
Tested up to: 6.4.3
Requires PHP: 7.4
License: GPLv2
Stable tag: 14.1.0
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Easy integration of Twitter cards in WordPress. All card types provided. 

== Description ==

Once activated the plugin adds appropriate meta on your WordPress website allowing you to get Twitter cards for your posts according to your settings. Enjoy !

**WARNING: the recent changes on Twitter (which is now X) might cause some issues. The last update was a security fix in case you use password protected or private posts, but support ends here.**

= Features =

* Gutenberg compatible with a custom sidebar
* meta box : customize Twitter Cards experience (per each post)
* preview : preview the rendering on Twitter.
* WP SEO by Yoast and All in One SEO compatible (no conflict with SEO title and desc set with these plugins)

= Translators =

The plugin is available in French, English and Spanish. Feel totally free to send me your translation in other languages.
You'll be added to the list here with your name and URL.
Thanks a lot to all translators. Can't wait to add your work to the project.

* Spanish version : [WebHostingHub](http://www.webhostinghub.com/) (thanks a lot ^^)
* Catalan version : [SeoFreelance](http://www.seofreelance.es) (thanks Dude )
* Italian version : [IBIDEM GROUP](https://www.ibidemgroup.com) (thanks a lot)

= Versions 13++ on GitLab =

*  Latest stable version is here: [https://gitlab.com/wp-coding/jm-twitter-cards-reloaded](https://gitlab.com/wp-coding/jm-twitter-cards-reloaded)

This is where I work on the new version of the plugin for fun (new features, refactoring & possible breaking changes).

Note that this new version won't be pushed to WordPress.org, at least, for now. If you want to try it, feel free to clone the project.

== Installation ==

1. Upload plugin files to the /wp-content/plugins/ directory
2. Activate the plugin through the Plugins menu in WordPress
3. Then go to settings > JM Twitter Cards to configure the plugin
4. To display the metabox in edit section (posts, pages, attachments) just use default settings or enable only the post types you want

== Frequently asked questions ==

= I got problem with Instagram =

It's a known issue due to Instagram. Twitter said it recently : Users are experiencing issues with viewing Instagram photos on Twitter. Issues include cropped images.This is due to Instagram disabling its Twitter cards integration, and as a result, photos are being displayed using a pre-cards experience.
So, when users click on Tweets with an Instagram link, photos appear cropped.

= Plugin is fine but Twitter cards doesn't appear in my tweets =

1. Make sure you correctly fulfilled fields in option page according to [Twitter documentation](https://dev.twitter.com/docs/cards "Twitter cards documentation")
2. Be careful with your robots.txt and put some rules to allow Twitter to fetch your website :

`
	User-agent: Twitterbot
	Disallow:
`

If it still doesn't work please open a thread on support.

= The plugin generates a lot of images (different sizes) =

I can be a problem when you work with HD and/or a lot of images.

**How do I use the custom fields option?**

Basically you provide your custom field keys in plugin option page and then it will grab datas.


/**************
*			  *
* En Français *
* 			  *
************/

= Problème avec Instagram =
C'est un problème connu. Cela vient d'Instagram lui-même qui préfère que ses utilisateurs partagent les photos chez lui plutôt que sur Twitter. Instagram a supprimé ses Twitter Cards.

= Le plugin marche mais je n'obtiens pas de Twitter Cards dans mes tweets =

1. Assurez-vous bien d'avoir rempli correctement les champs dans la page d'options suivant <a href="https://dev.twitter.com/docs/cards" title="Twitter cards documentation">la documentation Twitter</a>
2. Attention avec le fichier robots.txt, vous devez autoriser le robot de Twitter à crawler votre site:

`
	User-agent: Twitterbot
	Disallow:
`

Si cela ne marche toujours pas SVP ouvrez un topic sur le support.

= Le plugin génère beaucoup trop de fichiers images =

Cela peut poser problème si vous travaillez avec de la HD et/ou beaucoup d'images. Vous pouvez donc utiliser un plugin qui va effacer les fichiers images non utilisés.

= Comment utiliser l'option custom fields? =

Il suffit de renseigner les clés de vos custom fields en page d'option et le plugin s'occupera de récupérer les datas correspondantes.

== Changelog ==

## March 2024

* fix security vulnerability in edge cases for password-protected posts or private status with default excerpt from post content

== Upgrade notice ==
Nothing
= 1.0 =
