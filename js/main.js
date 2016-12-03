$( document ).ready(function(){

	//COLLABORATION

	//slider show more show less

		//What is it?
		$('.expand').click(function(e) {
			// "this" refers to the "a" that was clicked
			e.preventDefault();
			var commonContainer = $(this).closest('.container');
			// commonContainer now refers to the parent div that has a class of "container" on it. This commonContainer is common ancestor to the <a> tag that was clicked on, but also to the paragraph of text and the Read less link.

			// Doing this code would call slideDown() on ALL elements with a class of content and collapse. We only wanna slideDown() those that are a child of commonContainer
			// $('.content, .collapse').slideDown();

			// So instead we do this:
			// Using commonContainer as a starting point, we find its children using .find() that have the matching selectors "content" or "collapse", and then on those we call slideDown()
			commonContainer.find('.content, .collapse').slideDown();



			// Again, here we don't wanna do this because it will hide ALL <a> tags that are a child of .expand. When in fact we only wanna call those that are a child of commonContainer
			// $('.expand a').hide();

			// So we could do this:
			// And it would totally work
			// commonContainer.find('.expand a').hide();

			// But because "this" already refers to the <a> tag we want to hide, we can just do this:
			$(this).hide();
		});

		$('.collapse').click(function(e) {
			//Inside this method, its the same routine as above.
			//We need to find the common ancestor, ".container" and then use it as a starting point to traverse the DOM and find the elements we need to hide/show/slide

			//in this case, "this" refers to the element that was clicked on that has the .collpase class
			e.preventDefault();
			// so here we use that as our starting point and traverse UP the DOM to find the closest parent element that has a class of .container. That will be our common container.
			var commonContainer = $(this).closest('.container');

			commonContainer.find('.content, .collapse').slideUp();


			commonContainer.find('.expand').show();
		});


})
