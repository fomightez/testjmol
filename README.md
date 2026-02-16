**IMPORATNT**  
WHEN LATER want to update the version of Jmol / JSmol, copy out the `w` directory first. Plus THIS README!    
That `w` directory **BELOW** the folder location with the test file (https://fomightez.github.io/testjmol/jsmol/jsmol/simple.htm) has, ASIDE FROM THIS README, all my additions beyond what Jmol/JSmol includes.  
So after delete everything in this repo & replace it with a new unpacked version of Jmol, I can just add back in this README and that `w` directory.

THIS REPO IS THE DEVELOPMENT / TESTING GROUNDS for the related repo https://github.com/fomightez/jmol.   
THIS WILL MAINLY BE FOR WHEN WANT TO MOVE TOWARDS UPDATING THE VERSION OF Jmol/ JSmol there. This way I can test things first here while keeping my actual stuff working.  
Actual deployed version corresponding to this site is at related repo https://github.com/fomightez/jmol .  
Example working page there is:  
https://fomightez.github.io/jmol/simple.htm



## Technical

For now I still haven't set up GitHub actions to deploy the static content so for now have a gh-pages branch and need commands like `symbolic-ref "refs/heads/gh-pages" "refs/heads/master"` and `git push --mirror` after each commit and push.  