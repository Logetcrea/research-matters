#Steel-Ant, Input/Output, Data Vis

-

###research matters

---


######About
In this project I am showing how many different research projects have been executed on the ISS.
 
 
######first idea
At first I had the idea to make kind of an Interactive-Browser-App.  
I wanted to integrate some different by the NASA provided information. The idea was to give the feeling of nearness and real communication. I decided to give a menu for choosing to get information about the astronauts, live broadcast from the ISS and the newest tweet. Moreover I wanted to show the current research topics, their universities and the current position of the ISS...    

<img src="https://raw.githubusercontent.com/logetcrea/research-matters/master/screens/default.png"
width="100%" style="display: inline-block;" />

<img src="https://raw.githubusercontent.com/logetcrea/research-matters/master/screens/menu.png" width="100%" style="display: inline-block;" />

<img src="https://raw.githubusercontent.com/logetcrea/research-matters/master/screens/live.png" width="100%" style="display: inline-block;" />

<img src="https://raw.githubusercontent.com/logetcrea/research-matters/master/screens/research.png" width="100%" style="display: inline-block;" />  

definetely too much...

-

######second plan
I just played a little with the data.  

<img src="https://raw.githubusercontent.com/logetcrea/research-matters/master/screens/iss.png" width="100%" style="display: inline-block;" />
  
I decided to take only the research data and visualize the differences in topic, time and their different investigators.  

<img src="https://raw.githubusercontent.com/logetcrea/research-matters/master/screens/hue-topics.png" width="100%" style="display: inline-block;" />

But I had a lot trouble getting the data...  
g.e. with [import.io](https://import.io/)  
 
<img src="https://raw.githubusercontent.com/logetcrea/research-matters/master/screens/io-fail.png" width="100%" style="display: inline-block;" />

So I changed the strategy and tried [HTTrack](http://www.httrack.com/html/abuse.html), a gorgeous tool for copying websites. To get the desired data, I had to filter the html with another genius tool, called [pup](https://github.com/EricChiang/pup). I precticed [Regex](http://regexr.com/) in my Text-Editor for deleting some in my case useless rubish, but all that did not work well, because of unfortunately, improbable circumstances. Pup is a nice tool, but you need tags in your html. Unfortunately exactly my desired information wasn't in a tag...  

-

######my data visualization
[research-matters](http://logetcrea.github.io/research-matters/index.html)

-

###### License


**©** 2015 Paul Klinski "logetcrea", University of Applied Sciences Potsdam (Germany).  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

see also [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
