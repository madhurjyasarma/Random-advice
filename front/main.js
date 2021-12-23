$('body').terminal(
{
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
    hie: function (name) {
        this.echo(saysomething(name));
    },
    advice: function () {
        this.echo(fetchAdviceAPI());
    }
},
{
    greetings: 'Terminal UI - Hack NOSA :: Type \'help\' to show options'
});

function saysomething(name) {
    return 'Hieee ' +name+ '..Weocooooooooooooomeeeeeeeeeeeeeeeee from saysomething.';
}

async function fetchAdviceAPI() {
    let url = "https://api.adviceslip.com/advice";
    let response = await fetch(url);
    // console.log(response)
    let data = await response.text();
    // console.log(data);
    parsed_response = JSON.parse(data);
    // console.log(parsed_response);
    // console.log(parsed_response.slip.advice);
    return parsed_response.slip.advice
}