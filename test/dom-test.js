/*
    CLI: `buster server` then `buster test --reporter specification`
 */

buster.testCase('a module', {
    setUp: function(){
        this.counter = 0;
    },

    'states the obvious': function(){
        this.counter++;
        assert.same(this.counter, 1);
    },

    'an async test': function(done){
        var async = false;

        console.log(async);

        window.setTimeout(done(function(){
            console.log(async);
            assert.same(async, true);
        }), 100);
        
        async = true;
    },

    'doing some DOM tests': function(){
        var doc = document;
        var test = doc.getElementById('test');
        var test2 = doc.getElementById('test2');
        var mylist = doc.getElementsByClassName('my-list')[0];
        var lis = mylist.getElementsByTagName('li');

        assert.same(test.innerHTML, '            This is my test div        ');
        assert.same(test.innerHTML.indexOf('This is my test div'), 12);
        assert.match(test2, {
            id: 'test2',
            tagName: 'div'
        });

        assert.match.exceptionMessage = '${0}';
        assert.match.message = 'We kinda expected the result ${0} to equal ${1}';
        assert.match(lis[0].innerHTML, 2); // converts to Number (uses ==)
    }

});