describe 'splitter', ->
  describe 'splitter()', ->
    it 'split phone number', ->
      pack = splitter.splitter '0768223333'
      assert.ok pack[0] == '0768'
      assert.ok pack[1] == '22'
      assert.ok pack[2] == '3333'
