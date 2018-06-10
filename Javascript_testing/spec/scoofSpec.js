describe("background-color unit testing", function(){ 

    it('should test the background color and find white', function(){

      changeBackground(true);

      var color = document.body.style.backgroundColor;
      expect(color).toBe('white');
    })
});