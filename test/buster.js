var config = module.exports;

config['My tests'] = {
    //autoRun: false, (if using AMD, enable this prop and call `buster.run()` when you're ready to start the tests)
    rootPath: '../',
    environment: 'browser', // or 'node'
    sources: [
        //'lib/mylib.js',
        //'lib/**/*.js'
    ],
    tests: [
        'test/*-test.js'
    ],
    /*
    testbed: 'my-file.html' // NOT IMPLEMENTED YET, SO USING `resources` IS A WORK-AROUND
    */
    resources: [
        {
            path: '/',
            content:    '<!doctype html>' + 
                        '<html dir="ltr" lang="en">' + 
                        '    <head>' + 
                        '        <meta charset="utf-8">' + 
                        '        <meta name="viewport" content="width=device-width, initial-scale=1">' + 
                        '        <title>BusterJS tests</title>' + 
                        '    </head>' + 
                        '    <body>' + 
                        '        <div id="test">' + 
                        '            This is my test div' + 
                        '        </div>' + 
                        '        <div id="test2">' + 
                        '            <p>This is my second test div</p>' + 
                        '            <ul class="my-list">' + 
                        '                <li>1</li>' + 
                        '                <li>2</li>' + 
                        '                <li>3</li>' + 
                        '                <li>4</li>' + 
                        '                <li>5</li>' + 
                        '            </ul>' + 
                        '        </div>' + 
                        '    </body>' + 
                        '</html>'
        }
    ]
}