describe 'splitter', ->
  describe 'split()', ->
    context 'when finded prefix', ->
      it 'returns split phone number', ->
        result = splitter.split '0768223333'

        assert.ok result[0] == '0768'
        assert.ok result[1] == '22'
        assert.ok result[2] == '3333'

    context 'when unkown prefix', ->
      it 'returns default value', ->
        result = splitter.split '9999'

        assert.ok result[0] == '9999'
        assert.ok result[1] == ''
        assert.ok result[2] == ''

  describe 'format()', ->
    context 'when finded prefix', ->
      it 'returns split phone number', ->
        result = splitter.format '0768223333'
        assert.ok result == '0768-22-3333'
