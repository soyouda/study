var todo = (function () {
    var mode = 'html';
    var tasks = [];
    var STATE_P = '진행';
    var STATE_C = '완료';

    var addTask = (function () {
        var id = 0;

        return function (title) {
            var result = id;

            tasks.push({
                title:title,
                id:id++,
                state:STATE_P
            });

            render();

            return result;
        };
    })();

    var removeTask = function (id) {
        var isRemoved = false;

        for(var i = 0; i < tasks.length; i++) {
            if(tasks[i].id === id) {
                tasks.splice(i,1);
                isRemoved = true;

                break;
            }
        }

        if(!isRemoved) {
            warning('removeTask: invalid id');
        }

        render();
    };


    var changeState = function (id, state) {
        var ID = false, STATE;
        for(var i = 0; i < tasks.length; i++) {
            if(tasks[i].id === id) {
                ID = id;
                break;
            }
        }

        if(ID === false) {
            warning('changeState: invalid id -' + id);
            return;
        }

        STATE = state;

        for(var i = 0; i < tasks.length; i++) {
            if(tasks[i].id === ID) {
                tasks[i].state = STATE;

                break;
            }
        }

        render();
    };

    var warning = console.log;

    var render = (function () {
        var renderConsole = function () {
            warning('진행');

            var task;
            for(var i = 0; i < tasks.length; i++) {
                task = tasks[i];
                if(tasks[i].state === '진행') {
                    warning(tasks[i].id + ',' + task.title +'(' + task.state+ ')')
                }
            }

            warning('완료');

            for(var i = 0; i < tasks.length; i++) {
                task = tasks[i];
                if(tasks[i].state === '완료') {
                    warning(tasks[i].id + ',' + task.title +'(' + task.state+ ')')
                }
            }

            console.log ('추가    : addTask(할 일 내용)');
            console.log ('삭제    : removeTask(아이디)');
            console.log ('상태변경 : changeState(아이디, 상태 - 완료 또는 진행)');

        };

        var renderHTML = function () {

        };

        return function(){
            if(mode ==='console') {
                renderConsole()
            } else if (mode === 'html') {
                renderHTML()
            }

        };
    });

    render();

    return {
        modeHtml : function(){
            mode = 'html';
        },
        modeConsole : function(){
            mode = 'console';
        },
        add: addTask,
        remove: removeTask,
        toggle: function (id) {
            for(var i = 0; i < tasks.length; i++) {
                if(tasks[i].id === id) {
                    if(tasks[i].state === STATE_P) {
                        changeState(id, STATE_C);
                    }else{
                        changeState(id, STATE_P);
                    }
                    break;
                }
            }
        }
    }
})();

var taskId = todo.add('이름');

todo.toggle(taskId);