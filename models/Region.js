function Region(){
	var self = this;
	
	var name = "no_name";
	
	var chunks = [];
	
	// Returns region name
	self.getName = function(){
		return name;
	};
	
	// Takes a string
	// Returns true if the name was set
	// Returns false otherwise
	self.setName = function( n ){
		if( tyepeof( n ) === "string" ){
			name = n;
			return true;
		}
		
		return false;
	};
	
	// Takes a chunk
	// Returns true if it is successfully added
	// Returns false otherwise
	self.addChunk = function( c ){
		var isValid = true;
		
		if( isValid ){
			chunks.push( c );
			return true;
		}
	};
	
	// Takes an integer
	// Deletes a chunk by index
	// Returns the deleted chunk if it exists
	// Returns false otherwise
	self.deleteChunk = function( i ){
		if( chunks.length > i ){
			var chunk = chunks.splice( i, 1 );
			
			if( chunk ){
				return chunk;
			}
			
			return false;
		}
	};
	
	// Takes an integer
	// Returns a chunk by index if it exists
	// Returns false otherwise
	self.getChunk = function( i ){
		if( chunks.length > i ){
			return chunks[i];
		}
		
		return false;
	};
	
	// Takes an integer and a chunk
	// Returns true if chunk is successfully set
	// Returns false otherwise
	self.setChunk = function( i, c ){
		var isValid = false;
		
		if( chunks.length > i ){
			isValid = true;
		}
		
		if( isValid ){
			chunks[i] = c; return true;
		}
		
		return false;
	}
}
