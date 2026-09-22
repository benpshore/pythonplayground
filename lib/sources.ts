export type Source = {id:string;name:string;home:string;feeds:string[];pythonOnly:boolean};
export const sources:Source[]=[
 {id:'python',name:'Python.org',home:'https://www.python.org/',feeds:['https://blog.python.org/feeds/posts/default?alt=rss'],pythonOnly:true},
 {id:'psf',name:'Python Software Foundation',home:'https://www.python.org/psf/',feeds:['https://pyfound.blogspot.com/feeds/posts/default?alt=rss'],pythonOnly:true},
 {id:'cheatsheet',name:'Python Cheatsheet',home:'https://www.pythoncheatsheet.org/blog',feeds:['https://www.pythoncheatsheet.org/feed.xml','https://www.pythoncheatsheet.org/rss.xml'],pythonOnly:true},
 {id:'realpython',name:'Real Python',home:'https://realpython.com/',feeds:['https://realpython.com/atom.xml'],pythonOnly:true},
 {id:'howtogeek',name:'How-To Geek',home:'https://www.howtogeek.com/',feeds:['https://www.howtogeek.com/feed/category/programming/'],pythonOnly:false},
 {id:'wired',name:'WIRED',home:'https://www.wired.com/',feeds:['https://www.wired.com/feed/rss'],pythonOnly:false},
 {id:'tomshardware',name:'Tom’s Hardware',home:'https://www.tomshardware.com/',feeds:['https://www.tomshardware.com/feeds/all'],pythonOnly:false},
 {id:'treyhunner',name:'Trey Hunner',home:'https://treyhunner.com/',feeds:['https://treyhunner.com/atom.xml'],pythonOnly:true},
 {id:'pybites',name:'PyBites',home:'https://pybit.es/',feeds:['https://pybit.es/feed/'],pythonOnly:true}
];
export type Article={id:string;source:string;sourceId:string;url:string;title:string;takeaway:string;points:string[];minutes:number|null;category:string;reason:string;basis:'starter'|'full'|'excerpt'|'headline';ai:boolean;code?:string;published?:string;score?:number};
export const starterArticles:Article[]=[
 {id:'starter-lists',source:'Python documentation',sourceId:'python',url:'https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions',title:'A shorter way to keep the useful bits.',takeaway:'Make a new list by describing what to keep and what to do with it.',points:['A list comprehension combines a loop and an optional condition.','An ordinary loop is just as valid when it reads more clearly.'],minutes:4,category:'Practical',reason:'One idea you can use today',basis:'starter',ai:false,code:'numbers = [1, 2, 3, 4, 5, 6]\nevens = [n for n in numbers if n % 2 == 0]\nprint(evens)  # [2, 4, 6]'},
 {id:'starter-cheatsheet',source:'Python Cheatsheet',sourceId:'cheatsheet',url:'https://www.pythoncheatsheet.org/',title:'A handy place to look things up.',takeaway:'Keep a quick reference nearby while you experiment.',points:['Use the cheatsheet as a reference during practice.','Pick one unfamiliar expression and try it in a small example.'],minutes:3,category:'Reference',reason:'Browse at your own pace',basis:'starter',ai:false},
 {id:'starter-control',source:'Python documentation',sourceId:'python',url:'https://docs.python.org/3/tutorial/controlflow.html',title:'More than one way to make a decision.',takeaway:'Use a condition to choose an action, and a loop to repeat it.',points:['if and else choose between paths.','for visits items; while continues while a condition holds.','Readable code matters more than using the cleverest expression.'],minutes:5,category:'Learn',reason:'Pairs with the playground',basis:'starter',ai:false,code:'for name in ["Ada", "", "Grace"]:\n    if name:\n        print(name)'}
];
