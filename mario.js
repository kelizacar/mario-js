
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
 function printPyramid(height) {
   for (var brick = 2; brick <= height + 1; brick++) {
     var str = "";
    //  console.log("brick ", brick);
     var layer = height-(brick-1);
     if (layer>0) {
       var spaces = " ".repeat(layer);
       str += spaces;
      //  console.log("layer ", layer);
     }
      var bricks = "#".repeat(brick);
      str += bricks;
      console.log(str);
   }
 }
