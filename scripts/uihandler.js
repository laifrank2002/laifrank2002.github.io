var UIHandler = (
	function()
	{
		var mousedown;
		var ui;
		
		var main;
		return {
			
			get mousedown() { return mousedown },
			get ui() { return ui },
			
			initialize: function()
			{	
				mousedown = null;
				
				ui = [];
				
				main = new UIWindow(0,0,800,600, "laifrank2002.github.io");
				main.onresize = function(width,height){this.resize(width,height)};
				ui.push(main);
				
				var content = new UITabbedPanel(0,0,800,575);
				content.onresize = function(width,height){this.resize(this.parent.width,this.parent.height)};
				
				var home = new UIScrollPanel(0,0,800,550,1000);
				home.onresize = function(width,height){this.resize(this.parent.width,this.parent.height)};
				
				home.addSubElement(new UILabel(data_text_home_article_1["title"],"left",24),20,20);
				home.addSubElement(new UILabel(data_text_home_article_1["date"],"left"),20,60);
				home.addSubElement(new UITextArea(400,300,data_text_home_article_1["text"])
					,20,80);
				
				home.addSubElement(new UIButton(100,25,"Github",function()
					{
						window.open("https:\\laifrank2002.github.io", '_blank');
					}),20,500);
					
				content.addSubPanel("Home",home);
				
				var projects = new UIScrollPanel(0,0,800,550,1000);
				projects.onresize = function(width,height){this.resize(this.parent.width,this.parent.height)};
				
				projects.addSubElement(new UILabel("These are my many projects. Some would say too many. I say NONSENSE.","left"),20,20);
				
				projects.addSubElement(new UILabel("Web Projects","left",24),20,50);
				
				var procyon_skies_top = 90;
				projects.addSubElement(new UILabel("Procyon Skies","left",20),20,procyon_skies_top+0);
				projects.addSubElement(new UILabel("An IO style game made using a lot of javascript. Made with   clocks-in-a-cooler   and Julian.","left"),20,procyon_skies_top+30);
				projects.addSubElement(new UIButton(120,25,"Clocks-In-A-Cooler",function()
					{
						window.open("https://clocks-in-a-cooler.github.io/", '_blank');
					}),390,procyon_skies_top+25);
				projects.addSubElement(new UIButton(120,25,"Play!",function()
					{
						window.open("https://procyon-skies.herokuapp.com/", '_blank');
					}),20,procyon_skies_top+60);
					
				projects.addSubElement(new UIButton(100,25,"Github!",function()
					{
						window.open("https://github.com/Clocks-in-a-Cooler/procyon_skies", '_blank');
					}),150,procyon_skies_top+60);
					
				var procyon_top = 190;
				projects.addSubElement(new UILabel("Procyon","left",20),20,procyon_top+0);
				projects.addSubElement(new UILabel("Entry for 2018 GitHub Game Jam! Made with   clocks-in-a-cooler   and Julian.","left"),20,procyon_top+30);
				projects.addSubElement(new UIButton(120,25,"Clocks-In-A-Cooler",function()
					{
						window.open("https://clocks-in-a-cooler.github.io/", '_blank');
					}),310,procyon_top+25);
				projects.addSubElement(new UIButton(120,25,"Play!",function()
					{
						window.open("https://clocks-in-a-cooler.github.io/game_jam_2018/", '_blank');
					}),20,procyon_top+60);
					
				projects.addSubElement(new UIButton(100,25,"Github!",function()
					{
						window.open("https://github.com/clocks-in-a-cooler/game_jam_2018/", '_blank');
					}),150,procyon_top+60);
				
				var skystories_top = 290;
				projects.addSubElement(new UILabel("SkyStories","left",20),20,skystories_top+0);
				projects.addSubElement(new UILabel("A site for a friend, about Love, mostly Love, actually it's all Love.","left"),20,skystories_top+30);
				projects.addSubElement(new UIButton(120,25,"Read!",function()
					{
						window.open("https://skystories.github.io/home/", '_blank');
					}),20,skystories_top+60);
				projects.addSubElement(new UIButton(150,25,"Insert Opinion Here!",function()
					{
						window.open("http://skystories.epizy.com/?i=1", '_blank');
					}),150,skystories_top+60);
					
				var js_jigsaw_top = 390;
				projects.addSubElement(new UILabel("JS Jigsaw","left",20),20,js_jigsaw_top+0);
				projects.addSubElement(new UILabel("When I learned how to make horrible UI.","left"),20,js_jigsaw_top+30);
				projects.addSubElement(new UIButton(120,25,"Play!",function()
					{
						window.open("https://laifrank2002.github.io/JS_Jigsaw_Puzzle/", '_blank');
					}),20,js_jigsaw_top+60);
					
				projects.addSubElement(new UIButton(100,25,"Github!",function()
					{
						window.open("https://github.com/laifrank2002/JS_Jigsaw_Puzzle", '_blank');
					}),150,js_jigsaw_top+60);
				
				var medieval_adventure_top = 490;
				projects.addSubElement(new UILabel("Medieval Adventure","left",20),20,medieval_adventure_top+0);
				projects.addSubElement(new UILabel("Break free from prison and... and... well, you'll see. Made with Aurora in '16.","left"),20,medieval_adventure_top+30);
				projects.addSubElement(new UIButton(120,25,"Play!",function()
					{
						window.open("https://laifrank2002.github.io/adventure/Adventure/adventure.html", '_blank');
					}),20,medieval_adventure_top+60);
					
				projects.addSubElement(new UIButton(100,25,"Github!",function()
					{
						window.open("https://github.com/laifrank2002/adventure", '_blank');
					}),150,medieval_adventure_top+60);
					
				var js_jigsaw_top = 590;
				projects.addSubElement(new UILabel("A Small War","left",20),20,js_jigsaw_top+0);
				projects.addSubElement(new UILabel("Way back when I was still using 'quaint' technologies like HTML and CSS. When I first learned JS in the summer of '16. Abandoned.","left"),20,js_jigsaw_top+30);
				projects.addSubElement(new UIButton(120,25,"Play!",function()
					{
						window.open("https://laifrank2002.github.io/war/Game/game.html", '_blank');
					}),20,js_jigsaw_top+60);
					
				projects.addSubElement(new UIButton(100,25,"Github!",function()
					{
						window.open("https://github.com/laifrank2002/war", '_blank');
					}),150,js_jigsaw_top+60);
					
					
				content.addSubPanel("Projects",projects);
				
				
				main.addSubElement(content,0,0);
				
			},
			
			draw: function(context)
			{
				// draw in reverse order to reflect the order of click propagation
				var elements_to_draw = [...ui].reverse();
				elements_to_draw.forEach(element => element.draw(context));

			},
			
			handle_mousedown: function(mouseX,mouseY)
			{
				for(uielement in ui)
				{
					// if any one of the ui first registers propagation
					// return true as only one mouse down should be registered.
					if(ui[uielement].handle_mousedown(mouseX,mouseY))
					{
						mousedown = new Point(mouseX, mouseY);
						return true;
					}
				}
				// if nothing, then return 
				return false;
			},
			
			handle_mouseup: function(mouseX,mouseY)
			{
				for(uielement in ui)
				{
					// register mouseup for all ui elements to remove last_mousedown
					if(ui[uielement].handle_mouseup(mouseX,mouseY))
					{
						mousedown = null;
					}
				}
			},
			
			handle_keydown: function(character)
			{
				for(uielement in ui)
				{
					if(ui[uielement].handle_keydown(character))
					{
						return true;
					}
				}
			},
			
			handle_keyup: function(character)
			{
				for(uielement in ui)
				{
					if(ui[uielement].handle_keyup(character))
					{
						
					}
				}
			},
			
			onresize: function(width,height)
			{
				for(uielement in ui)
				{
					ui[uielement].handle_resize(width,height);
				}
				
			},
		}
	}
)();

/**
	Viewport object allows further 
	custom functions in the future made generic
	Cuts down on code overhead.
		Ex: getting objects in frame
 */
function Viewport(x,y,width,height)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

/**
	Viewport's isInBounds takes the WHOLE object
	instead of just an x,y point into consideration
 */
Viewport.prototype.isInBounds = function(object)
{
	if(object.x + object.width > this.x
		&& object.y + object.height > this.y 
		&& object.x < this.x + this.width 
		&& object.y < this.y + this.height)
	{
		return true;
	}
	return false;
}

Viewport.prototype.move = function(x,y)
{
	this.x += x;
	this.y += y;
}

Viewport.prototype.setPosition = function(x,y)
{
	this.x = x;
	this.y = y;
}

Viewport.prototype.resize = function(width,height)
{
	if(!isNaN(width)) this.width = width;
	if(!isNaN(height)) this.height = height;
}