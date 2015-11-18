describe 'dict', ->
  describe 'len5', ->
    it 'when included in the dictionary and return true', ->
      assert.ok dict.len5.contains('09913')
      assert.ok dict.len5.contains('0773') == false
      assert.ok dict.len5.contains('053') == false
      assert.ok dict.len5.contains('04') == false

  describe 'len4', ->
    it 'when included in the dictionary and return true', ->
      assert.ok dict.len4.contains('09913') == false
      assert.ok dict.len4.contains('0773')
      assert.ok dict.len4.contains('053') == false
      assert.ok dict.len4.contains('04') == false

  describe 'len3', ->
    it 'when included in the dictionary and return true', ->
      assert.ok dict.len3.contains('09913') == false
      assert.ok dict.len3.contains('0773') == false
      assert.ok dict.len3.contains('053')
      assert.ok dict.len3.contains('04') == false

  describe 'len2', ->
    it 'when included in the dictionary and return true', ->
      assert.ok dict.len2.contains('09913') == false
      assert.ok dict.len2.contains('0773') == false
      assert.ok dict.len2.contains('053') == false
      assert.ok dict.len2.contains('04')
