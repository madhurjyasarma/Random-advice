$('body').terminal({
    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to TERMINAL UI.');
    },
    developer: function () {
        this.echo('MVDZO X AVIN');
    },
    help: function () {
        this.echo(
          'help              :: to show this menu\n'+
          'iam <your name>   :: for greeting\n'
        + 'developer         :: to know the Anonymous\n');
    },
}, {
    greetings: 'Terminal UI - Hack NOSA :: Type \'help\' to show options'
});