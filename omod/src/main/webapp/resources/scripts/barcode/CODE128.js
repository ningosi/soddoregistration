



<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>JsBarcode/CODE128.js at master · lindell/JsBarcode</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="lindell/JsBarcode" name="twitter:title" /><meta content="JsBarcode - Create different type of barcodes with javascript" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/284868?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/284868?v=2&amp;s=400" property="og:image" /><meta content="lindell/JsBarcode" property="og:title" /><meta content="https://github.com/lindell/JsBarcode" property="og:url" /><meta content="JsBarcode - Create different type of barcodes with javascript" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4B70F3A8:7B60:11F924E1:53FFF1F0" name="octolytics-dimension-request_id" /><meta content="238701" name="octolytics-actor-id" /><meta content="judywawira" name="octolytics-actor-login" /><meta content="f485c1c1c78d8ce789b285d3949b1a5f7ef8e432d8aa44b237a8b1e9682bba36" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="2mMcZaHGD9qQ7bvzm7MUOfGAnjH2gVUwVeJL8kHbZo/DxGLY0Jqw+iRERrg3Auz5ZbhkKDju9gvXRPkE6c+GBA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-22ebe3fd5f83f100171e6b6cee5f168a822b9911.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-af7e2815f01f2deefbceefdbb5475077fbb94ccc.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="8747430103af3d0195e2815190a65f6d">

      
  <meta name="description" content="JsBarcode - Create different type of barcodes with javascript">
  <meta name="go-import" content="github.com/lindell/JsBarcode git https://github.com/lindell/JsBarcode.git">

  <meta content="284868" name="octolytics-dimension-user_id" /><meta content="lindell" name="octolytics-dimension-user_login" /><meta content="3069402" name="octolytics-dimension-repository_id" /><meta content="lindell/JsBarcode" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3069402" name="octolytics-dimension-repository_network_root_id" /><meta content="lindell/JsBarcode" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/lindell/JsBarcode/commits/master.atom" rel="alternate" title="Recent Commits to JsBarcode:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search">
          <form accept-charset="UTF-8" action="/lindell/JsBarcode/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/lindell/JsBarcode/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left">
        <li class="header-nav-item explore" data-ga-click="Header, go to explore, text:explore">
          <a class="header-nav-link" href="/explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/judywawira" data-ga-click="Header, go to profile, text:username">
      <img alt="judywawira" class="avatar" data-user="238701" height="20" src="https://avatars3.githubusercontent.com/u/238701?v=2&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">judywawira</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="lindell/JsBarcode">This repository</span>
    </li>
      <li>
        <a href="/lindell/JsBarcode/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="8IjQBUifRDT2mxE3RdhccOy1Cti5nw+5eIv3aLLbpUlpULmZ5Ajuth1rdCtOQl+oDvksCGcNEO3nlKJedVGsvg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="GM1hOCFf/0RJC0fegJu56SYnIA80lCrib7XMXGKvQPZiSC6KmEWaMOcQ3Js1INbmjXbvRhEMF+tehn6wqzwedQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3069402" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/lindell/JsBarcode/watchers">
        9
      </a>
      <a href="/lindell/JsBarcode/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container on">

    <form accept-charset="UTF-8" action="/lindell/JsBarcode/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OZ/m/0AEsqNNHFnYigf+0dGcZyBX4YbmUWCBbfeNKev+rVdJyJMnhsmMJtYx2jVLLag3rtCy7fqsTEN8IiKSMg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar lindell/JsBarcode">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/lindell/JsBarcode/stargazers">
          77
        </a>
</form>
    <form accept-charset="UTF-8" action="/lindell/JsBarcode/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vZAqF0/ie5d1+30DT5wp3wiLSEyZjfwt7aTe5zX1ZQO/TbM+Fm5VSSq2/O21V7L/Rw3UiSAlKA2YDy/xPolhGg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star lindell/JsBarcode">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/lindell/JsBarcode/stargazers">
          77
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/lindell/JsBarcode/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of lindell/JsBarcode to your account" aria-label="Fork your own copy of lindell/JsBarcode to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/lindell/JsBarcode/network" class="social-count">23</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/lindell" class="url fn" itemprop="url" rel="author"><span itemprop="title">lindell</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/lindell/JsBarcode" class="js-current-repository js-repo-home-link">JsBarcode</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/lindell/JsBarcode/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/lindell/JsBarcode" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /lindell/JsBarcode">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/lindell/JsBarcode/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /lindell/JsBarcode/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/lindell/JsBarcode/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /lindell/JsBarcode/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/lindell/JsBarcode/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /lindell/JsBarcode/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/lindell/JsBarcode/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /lindell/JsBarcode/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/lindell/JsBarcode/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /lindell/JsBarcode/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/lindell/JsBarcode.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/lindell/JsBarcode.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:lindell/JsBarcode.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:lindell/JsBarcode.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/lindell/JsBarcode" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/lindell/JsBarcode" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/lindell/JsBarcode" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save lindell/JsBarcode to your computer and use it in GitHub Desktop." aria-label="Save lindell/JsBarcode to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/lindell/JsBarcode/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download lindell/JsBarcode as a zip file"
                   title="Download lindell/JsBarcode as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/lindell/JsBarcode/blob/0df0deeed5b94e3348f05d421f184c8d80176bc0/CODE128.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f0be3ecaa9655312bca7140335b5b46d -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/lindell/JsBarcode/blob/gh-pages/CODE128.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/lindell/JsBarcode/blob/gulp-compiler/CODE128.js"
                 data-name="gulp-compiler"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gulp-compiler">gulp-compiler</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/lindell/JsBarcode/blob/master/CODE128.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/lindell/JsBarcode/tree/1.1/CODE128.js"
                 data-name="1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1">1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/lindell/JsBarcode/tree/1.0/CODE128.js"
                 data-name="1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0">1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/lindell/JsBarcode/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="CODE128.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/lindell/JsBarcode" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">JsBarcode</span></a></span></span><span class="separator"> / </span><strong class="final-path">CODE128.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/lindell/JsBarcode/contributors/master/CODE128.js">
    <div class="file-history-tease-header">
      Fetching contributors&hellip;
    </div>

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>247 lines (225 sloc)</span>
          <span class="meta-divider"></span>
        <span>6.178 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/lindell/JsBarcode/raw/master/CODE128.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/lindell/JsBarcode/blame/master/CODE128.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/lindell/JsBarcode/commits/master/CODE128.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/lindell/JsBarcode?branch=master&amp;filepath=CODE128.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/lindell/JsBarcode/edit/master/CODE128.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/lindell/JsBarcode/delete/master/CODE128.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="kd">function</span> <span class="nx">CODE128</span><span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="nx">code</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">	<span class="nx">code</span> <span class="o">=</span> <span class="nx">code</span> <span class="o">||</span> <span class="s2">&quot;B&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">	<span class="k">this</span><span class="p">.</span><span class="nx">string128</span> <span class="o">=</span> <span class="nx">string</span><span class="o">+</span><span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">	<span class="k">this</span><span class="p">.</span><span class="nx">valid</span> <span class="o">=</span> <span class="nx">valid</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">	<span class="c1">//The public encoding function</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">	<span class="k">this</span><span class="p">.</span><span class="nx">encoded</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">		<span class="k">if</span><span class="p">(</span><span class="nx">valid</span><span class="p">(</span><span class="nx">string</span><span class="p">)){</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">			<span class="k">return</span> <span class="nx">calculate</span><span class="p">[</span><span class="s2">&quot;code128&quot;</span> <span class="o">+</span> <span class="nx">code</span><span class="p">](</span><span class="nx">string</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">		<span class="k">else</span><span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">			<span class="k">return</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">	<span class="c1">//Data for each character, the last characters will not be encoded but are used for error correction</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">	<span class="kd">var</span> <span class="nx">code128b</span> <span class="o">=</span> <span class="p">[</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot; &quot;</span><span class="p">,</span><span class="s2">&quot;11011001100&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;!&quot;</span><span class="p">,</span><span class="s2">&quot;11001101100&quot;</span><span class="p">,</span><span class="mi">1</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;\&quot;&quot;</span><span class="p">,</span><span class="s2">&quot;11001100110&quot;</span><span class="p">,</span><span class="mi">2</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;#&quot;</span><span class="p">,</span><span class="s2">&quot;10010011000&quot;</span><span class="p">,</span><span class="mi">3</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;$&quot;</span><span class="p">,</span><span class="s2">&quot;10010001100&quot;</span><span class="p">,</span><span class="mi">4</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;%&quot;</span><span class="p">,</span><span class="s2">&quot;10001001100&quot;</span><span class="p">,</span><span class="mi">5</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;&amp;&quot;</span><span class="p">,</span><span class="s2">&quot;10011001000&quot;</span><span class="p">,</span><span class="mi">6</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;&#39;&quot;</span><span class="p">,</span><span class="s2">&quot;10011000100&quot;</span><span class="p">,</span><span class="mi">7</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;(&quot;</span><span class="p">,</span><span class="s2">&quot;10001100100&quot;</span><span class="p">,</span><span class="mi">8</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;)&quot;</span><span class="p">,</span><span class="s2">&quot;11001001000&quot;</span><span class="p">,</span><span class="mi">9</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;*&quot;</span><span class="p">,</span><span class="s2">&quot;11001000100&quot;</span><span class="p">,</span><span class="mi">10</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;+&quot;</span><span class="p">,</span><span class="s2">&quot;11000100100&quot;</span><span class="p">,</span><span class="mi">11</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;,&quot;</span><span class="p">,</span><span class="s2">&quot;10110011100&quot;</span><span class="p">,</span><span class="mi">12</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;-&quot;</span><span class="p">,</span><span class="s2">&quot;10011011100&quot;</span><span class="p">,</span><span class="mi">13</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;.&quot;</span><span class="p">,</span><span class="s2">&quot;10011001110&quot;</span><span class="p">,</span><span class="mi">14</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;/&quot;</span><span class="p">,</span><span class="s2">&quot;10111001100&quot;</span><span class="p">,</span><span class="mi">15</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;0&quot;</span><span class="p">,</span><span class="s2">&quot;10011101100&quot;</span><span class="p">,</span><span class="mi">16</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;1&quot;</span><span class="p">,</span><span class="s2">&quot;10011100110&quot;</span><span class="p">,</span><span class="mi">17</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;2&quot;</span><span class="p">,</span><span class="s2">&quot;11001110010&quot;</span><span class="p">,</span><span class="mi">18</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;3&quot;</span><span class="p">,</span><span class="s2">&quot;11001011100&quot;</span><span class="p">,</span><span class="mi">19</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;4&quot;</span><span class="p">,</span><span class="s2">&quot;11001001110&quot;</span><span class="p">,</span><span class="mi">20</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;5&quot;</span><span class="p">,</span><span class="s2">&quot;11011100100&quot;</span><span class="p">,</span><span class="mi">21</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;6&quot;</span><span class="p">,</span><span class="s2">&quot;11001110100&quot;</span><span class="p">,</span><span class="mi">22</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;7&quot;</span><span class="p">,</span><span class="s2">&quot;11101101110&quot;</span><span class="p">,</span><span class="mi">23</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;8&quot;</span><span class="p">,</span><span class="s2">&quot;11101001100&quot;</span><span class="p">,</span><span class="mi">24</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;9&quot;</span><span class="p">,</span><span class="s2">&quot;11100101100&quot;</span><span class="p">,</span><span class="mi">25</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;:&quot;</span><span class="p">,</span><span class="s2">&quot;11100100110&quot;</span><span class="p">,</span><span class="mi">26</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;;&quot;</span><span class="p">,</span><span class="s2">&quot;11101100100&quot;</span><span class="p">,</span><span class="mi">27</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;&lt;&quot;</span><span class="p">,</span><span class="s2">&quot;11100110100&quot;</span><span class="p">,</span><span class="mi">28</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;=&quot;</span><span class="p">,</span><span class="s2">&quot;11100110010&quot;</span><span class="p">,</span><span class="mi">29</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;&gt;&quot;</span><span class="p">,</span><span class="s2">&quot;11011011000&quot;</span><span class="p">,</span><span class="mi">30</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;?&quot;</span><span class="p">,</span><span class="s2">&quot;11011000110&quot;</span><span class="p">,</span><span class="mi">31</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;@&quot;</span><span class="p">,</span><span class="s2">&quot;11000110110&quot;</span><span class="p">,</span><span class="mi">32</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;A&quot;</span><span class="p">,</span><span class="s2">&quot;10100011000&quot;</span><span class="p">,</span><span class="mi">33</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;B&quot;</span><span class="p">,</span><span class="s2">&quot;10001011000&quot;</span><span class="p">,</span><span class="mi">34</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;C&quot;</span><span class="p">,</span><span class="s2">&quot;10001000110&quot;</span><span class="p">,</span><span class="mi">35</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;D&quot;</span><span class="p">,</span><span class="s2">&quot;10110001000&quot;</span><span class="p">,</span><span class="mi">36</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;E&quot;</span><span class="p">,</span><span class="s2">&quot;10001101000&quot;</span><span class="p">,</span><span class="mi">37</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;F&quot;</span><span class="p">,</span><span class="s2">&quot;10001100010&quot;</span><span class="p">,</span><span class="mi">38</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;G&quot;</span><span class="p">,</span><span class="s2">&quot;11010001000&quot;</span><span class="p">,</span><span class="mi">39</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;H&quot;</span><span class="p">,</span><span class="s2">&quot;11000101000&quot;</span><span class="p">,</span><span class="mi">40</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;I&quot;</span><span class="p">,</span><span class="s2">&quot;11000100010&quot;</span><span class="p">,</span><span class="mi">41</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;J&quot;</span><span class="p">,</span><span class="s2">&quot;10110111000&quot;</span><span class="p">,</span><span class="mi">42</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;K&quot;</span><span class="p">,</span><span class="s2">&quot;10110001110&quot;</span><span class="p">,</span><span class="mi">43</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;L&quot;</span><span class="p">,</span><span class="s2">&quot;10001101110&quot;</span><span class="p">,</span><span class="mi">44</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="s2">&quot;10111011000&quot;</span><span class="p">,</span><span class="mi">45</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;N&quot;</span><span class="p">,</span><span class="s2">&quot;10111000110&quot;</span><span class="p">,</span><span class="mi">46</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;O&quot;</span><span class="p">,</span><span class="s2">&quot;10001110110&quot;</span><span class="p">,</span><span class="mi">47</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;P&quot;</span><span class="p">,</span><span class="s2">&quot;11101110110&quot;</span><span class="p">,</span><span class="mi">48</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;Q&quot;</span><span class="p">,</span><span class="s2">&quot;11010001110&quot;</span><span class="p">,</span><span class="mi">49</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;R&quot;</span><span class="p">,</span><span class="s2">&quot;11000101110&quot;</span><span class="p">,</span><span class="mi">50</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;S&quot;</span><span class="p">,</span><span class="s2">&quot;11011101000&quot;</span><span class="p">,</span><span class="mi">51</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;T&quot;</span><span class="p">,</span><span class="s2">&quot;11011100010&quot;</span><span class="p">,</span><span class="mi">52</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;U&quot;</span><span class="p">,</span><span class="s2">&quot;11011101110&quot;</span><span class="p">,</span><span class="mi">53</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;V&quot;</span><span class="p">,</span><span class="s2">&quot;11101011000&quot;</span><span class="p">,</span><span class="mi">54</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;W&quot;</span><span class="p">,</span><span class="s2">&quot;11101000110&quot;</span><span class="p">,</span><span class="mi">55</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;X&quot;</span><span class="p">,</span><span class="s2">&quot;11100010110&quot;</span><span class="p">,</span><span class="mi">56</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;Y&quot;</span><span class="p">,</span><span class="s2">&quot;11101101000&quot;</span><span class="p">,</span><span class="mi">57</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;Z&quot;</span><span class="p">,</span><span class="s2">&quot;11101100010&quot;</span><span class="p">,</span><span class="mi">58</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;[&quot;</span><span class="p">,</span><span class="s2">&quot;11100011010&quot;</span><span class="p">,</span><span class="mi">59</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;\\&quot;</span><span class="p">,</span><span class="s2">&quot;11101111010&quot;</span><span class="p">,</span><span class="mi">60</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;]&quot;</span><span class="p">,</span><span class="s2">&quot;11001000010&quot;</span><span class="p">,</span><span class="mi">61</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;^&quot;</span><span class="p">,</span><span class="s2">&quot;11110001010&quot;</span><span class="p">,</span><span class="mi">62</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;_&quot;</span><span class="p">,</span><span class="s2">&quot;10100110000&quot;</span><span class="p">,</span><span class="mi">63</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;`&quot;</span><span class="p">,</span><span class="s2">&quot;10100001100&quot;</span><span class="p">,</span><span class="mi">64</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;a&quot;</span><span class="p">,</span><span class="s2">&quot;10010110000&quot;</span><span class="p">,</span><span class="mi">65</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;b&quot;</span><span class="p">,</span><span class="s2">&quot;10010000110&quot;</span><span class="p">,</span><span class="mi">66</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;c&quot;</span><span class="p">,</span><span class="s2">&quot;10000101100&quot;</span><span class="p">,</span><span class="mi">67</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;d&quot;</span><span class="p">,</span><span class="s2">&quot;10000100110&quot;</span><span class="p">,</span><span class="mi">68</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;e&quot;</span><span class="p">,</span><span class="s2">&quot;10110010000&quot;</span><span class="p">,</span><span class="mi">69</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;f&quot;</span><span class="p">,</span><span class="s2">&quot;10110000100&quot;</span><span class="p">,</span><span class="mi">70</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;g&quot;</span><span class="p">,</span><span class="s2">&quot;10011010000&quot;</span><span class="p">,</span><span class="mi">71</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;h&quot;</span><span class="p">,</span><span class="s2">&quot;10011000010&quot;</span><span class="p">,</span><span class="mi">72</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;i&quot;</span><span class="p">,</span><span class="s2">&quot;10000110100&quot;</span><span class="p">,</span><span class="mi">73</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;j&quot;</span><span class="p">,</span><span class="s2">&quot;10000110010&quot;</span><span class="p">,</span><span class="mi">74</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;k&quot;</span><span class="p">,</span><span class="s2">&quot;11000010010&quot;</span><span class="p">,</span><span class="mi">75</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;l&quot;</span><span class="p">,</span><span class="s2">&quot;11001010000&quot;</span><span class="p">,</span><span class="mi">76</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;m&quot;</span><span class="p">,</span><span class="s2">&quot;11110111010&quot;</span><span class="p">,</span><span class="mi">77</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;n&quot;</span><span class="p">,</span><span class="s2">&quot;11000010100&quot;</span><span class="p">,</span><span class="mi">78</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;o&quot;</span><span class="p">,</span><span class="s2">&quot;10001111010&quot;</span><span class="p">,</span><span class="mi">79</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;p&quot;</span><span class="p">,</span><span class="s2">&quot;10100111100&quot;</span><span class="p">,</span><span class="mi">80</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;q&quot;</span><span class="p">,</span><span class="s2">&quot;10010111100&quot;</span><span class="p">,</span><span class="mi">81</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;r&quot;</span><span class="p">,</span><span class="s2">&quot;10010011110&quot;</span><span class="p">,</span><span class="mi">82</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;s&quot;</span><span class="p">,</span><span class="s2">&quot;10111100100&quot;</span><span class="p">,</span><span class="mi">83</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;t&quot;</span><span class="p">,</span><span class="s2">&quot;10011110100&quot;</span><span class="p">,</span><span class="mi">84</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;u&quot;</span><span class="p">,</span><span class="s2">&quot;10011110010&quot;</span><span class="p">,</span><span class="mi">85</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;v&quot;</span><span class="p">,</span><span class="s2">&quot;11110100100&quot;</span><span class="p">,</span><span class="mi">86</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;w&quot;</span><span class="p">,</span><span class="s2">&quot;11110010100&quot;</span><span class="p">,</span><span class="mi">87</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;x&quot;</span><span class="p">,</span><span class="s2">&quot;11110010010&quot;</span><span class="p">,</span><span class="mi">88</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;y&quot;</span><span class="p">,</span><span class="s2">&quot;11011011110&quot;</span><span class="p">,</span><span class="mi">89</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;z&quot;</span><span class="p">,</span><span class="s2">&quot;11011110110&quot;</span><span class="p">,</span><span class="mi">90</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;{&quot;</span><span class="p">,</span><span class="s2">&quot;11110110110&quot;</span><span class="p">,</span><span class="mi">91</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;|&quot;</span><span class="p">,</span><span class="s2">&quot;10101111000&quot;</span><span class="p">,</span><span class="mi">92</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;}&quot;</span><span class="p">,</span><span class="s2">&quot;10100011110&quot;</span><span class="p">,</span><span class="mi">93</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">	<span class="p">[</span><span class="s2">&quot;~&quot;</span><span class="p">,</span><span class="s2">&quot;10001011110&quot;</span><span class="p">,</span><span class="mi">94</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">127</span><span class="p">),</span><span class="s2">&quot;10111101000&quot;</span><span class="p">,</span><span class="mi">95</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">128</span><span class="p">),</span><span class="s2">&quot;10111100010&quot;</span><span class="p">,</span><span class="mi">96</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">129</span><span class="p">),</span><span class="s2">&quot;11110101000&quot;</span><span class="p">,</span><span class="mi">97</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">130</span><span class="p">),</span><span class="s2">&quot;11110100010&quot;</span><span class="p">,</span><span class="mi">98</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">131</span><span class="p">),</span><span class="s2">&quot;10111011110&quot;</span><span class="p">,</span><span class="mi">99</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">132</span><span class="p">),</span><span class="s2">&quot;10111101110&quot;</span><span class="p">,</span><span class="mi">100</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">133</span><span class="p">),</span><span class="s2">&quot;11101011110&quot;</span><span class="p">,</span><span class="mi">101</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">134</span><span class="p">),</span><span class="s2">&quot;11110101110&quot;</span><span class="p">,</span><span class="mi">102</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">	<span class="c1">//Start codes</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">135</span><span class="p">),</span><span class="s2">&quot;11010000100&quot;</span><span class="p">,</span><span class="mi">103</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">136</span><span class="p">),</span><span class="s2">&quot;11010010000&quot;</span><span class="p">,</span><span class="mi">104</span><span class="p">],</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">	<span class="p">[</span><span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="mi">137</span><span class="p">),</span><span class="s2">&quot;11010011100&quot;</span><span class="p">,</span><span class="mi">105</span><span class="p">]];</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">	<span class="c1">//The end bits</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">	<span class="kd">var</span> <span class="nx">endBin</span> <span class="o">=</span> <span class="s2">&quot;1100011101011&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">	<span class="c1">//This regexp is used for validation</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">	<span class="kd">var</span> <span class="nx">regexp</span> <span class="o">=</span> <span class="sr">/^[!-~ ]+$/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">	<span class="c1">//Use the regexp variable for validation</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">valid</span><span class="p">(){</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">		<span class="k">if</span><span class="p">(</span><span class="nx">string</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="nx">regexp</span><span class="p">)</span><span class="o">==-</span><span class="mi">1</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">	<span class="c1">//The encoder function that return a complete binary string. Data need to be validated before sent to this function</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">	<span class="c1">//This is general calculate function, which is called by code specific calculate functions</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">calculateCode128</span><span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="nx">encodeFn</span><span class="p">,</span> <span class="nx">startCode</span><span class="p">,</span> <span class="nx">checksumFn</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">		<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">		<span class="c1">//Add the start bits</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">		<span class="nx">result</span> <span class="o">+=</span> <span class="nx">encodingById</span><span class="p">(</span><span class="nx">startCode</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">		<span class="c1">//Add the encoded bits</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">		<span class="nx">result</span> <span class="o">+=</span> <span class="nx">encodeFn</span><span class="p">(</span><span class="nx">string</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">		<span class="c1">//Add the checksum</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">		<span class="nx">result</span> <span class="o">+=</span> <span class="nx">encodingById</span><span class="p">(</span><span class="nx">checksumFn</span><span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="nx">startCode</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">		<span class="c1">//Add the end bits</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">		<span class="nx">result</span> <span class="o">+=</span> <span class="nx">endBin</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">		<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">	<span class="c1">//Code specific calculate functions</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">	<span class="kd">var</span> <span class="nx">calculate</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">		<span class="nx">code128B</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">string</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">			<span class="k">return</span> <span class="nx">calculateCode128</span><span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="nx">encodeB</span><span class="p">,</span> <span class="mi">104</span><span class="p">,</span> <span class="nx">checksumB</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">		<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">		<span class="nx">code128C</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">string</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">			<span class="nx">string</span> <span class="o">=</span> <span class="nx">string</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ /g</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">			<span class="k">return</span> <span class="nx">calculateCode128</span><span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="nx">encodeC</span><span class="p">,</span> <span class="mi">105</span><span class="p">,</span> <span class="nx">checksumC</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">	<span class="c1">//Encode the characters (128 B)</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">encodeB</span><span class="p">(</span><span class="nx">string</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">		<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">string</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">			<span class="nx">result</span><span class="o">+=</span><span class="nx">encodingByChar</span><span class="p">(</span><span class="nx">string</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">		<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">	<span class="c1">//Encode the characters (128 C)</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">encodeC</span><span class="p">(</span><span class="nx">string</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">		<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">string</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">+=</span><span class="mi">2</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">			<span class="nx">result</span><span class="o">+=</span><span class="nx">encodingById</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">string</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="mi">2</span><span class="p">)));</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">		<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">	<span class="c1">//Calculate the checksum (128 B)</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">checksumB</span><span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="nx">startCode</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">		<span class="kd">var</span> <span class="nx">sum</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">string</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">			<span class="nx">sum</span> <span class="o">+=</span> <span class="nx">weightByCharacter</span><span class="p">(</span><span class="nx">string</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span><span class="o">*</span><span class="p">(</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">		<span class="k">return</span> <span class="p">(</span><span class="nx">sum</span><span class="o">+</span><span class="nx">startCode</span><span class="p">)</span> <span class="o">%</span> <span class="mi">103</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">	<span class="c1">//Calculate the checksum (128 C)</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">checksumC</span><span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="nx">startCode</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">		<span class="kd">var</span> <span class="nx">sum</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">		<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">string</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">+=</span><span class="mi">2</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">			<span class="nx">sum</span> <span class="o">+=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">string</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="mi">2</span><span class="p">))</span><span class="o">*</span><span class="p">(</span><span class="nx">w</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">			<span class="nx">w</span><span class="o">++</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">		<span class="k">return</span> <span class="p">(</span><span class="nx">sum</span><span class="o">+</span><span class="nx">startCode</span><span class="p">)</span> <span class="o">%</span> <span class="mi">103</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">	<span class="c1">//Get the encoded data by the id of the character</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">encodingById</span><span class="p">(</span><span class="nx">id</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">code128b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span><span class="nx">code128b</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span><span class="o">==</span><span class="nx">id</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">				<span class="k">return</span> <span class="nx">code128b</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">		<span class="k">return</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">	<span class="c1">//Get the id (weight) of a character</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">weightByCharacter</span><span class="p">(</span><span class="nx">character</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">code128b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span><span class="nx">code128b</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">==</span><span class="nx">character</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">				<span class="k">return</span> <span class="nx">code128b</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">2</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">		<span class="k">return</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">	<span class="c1">//Get the encoded data of a character</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">	<span class="kd">function</span> <span class="nx">encodingByChar</span><span class="p">(</span><span class="nx">character</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">code128b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">			<span class="k">if</span><span class="p">(</span><span class="nx">code128b</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">==</span><span class="nx">character</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">				<span class="k">return</span> <span class="nx">code128b</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">		<span class="k">return</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line"><span class="kd">function</span> <span class="nx">CODE128B</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">	<span class="k">return</span> <span class="k">new</span> <span class="nx">CODE128</span><span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="s2">&quot;B&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line"><span class="kd">function</span> <span class="nx">CODE128C</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">	<span class="k">return</span> <span class="k">new</span> <span class="nx">CODE128</span><span class="p">(</span><span class="nx">string</span><span class="p">,</span> <span class="s2">&quot;C&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line"><span class="p">};</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.08346s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-bc28a4f6b05fd6cd91bbc92310bbbc53e54c6ec2.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-4243df0e5ce6aba593337dddeaadd3cc429a00ec.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

