# Final Code Assessment

This is a final assessment of your individual ability to write code. This assignment will be open book except where noted, but don't collaborate with fellow students. You can ask TAs and instructors clarifying questions but not debugging or guidance questions.

For this assignment you have recieved the boilerplate of a simple full stack Javascript application. You'll have to find all the spots where comments marked `// TODO` or `<!-- TODO -->` have been placed in the application code base. Each _TODO_ comment contains instuctions for features that need to be implemented. Find and fill the in the code that is needed to satisfy each _TODO_'s request. Make sure to follow the best practices covered in the 401.

To find all the _TODO_ comments run this command:  
`cat <(grep TODO *.js) <(grep -r TODO app) <(grep -r TODO test)` 

# To Submit Your Assignment
**READ THIS BEFORE BEGINNING TO WRITE CODE**  
_Feel free to have TAs help you with the submission process._

In order to keep your solutions confidential, the submission process will be different than previous assignmets.  
**Do not put your soultion on github or make any pull request to this repository!**

### How to submit
* Clone this repository to your local machine (_do not make a fork_)
* Code your solution use proper git workflow
 * commit your results
* Create a patch file by runing the folloing command (_do not make changes to this command_)
 * `git format-patch fad91f73c4859ceec5b83e21cda3d3149a984026`
 * This will create a patch file
* Upload this patch file to canvas
