/*

    The Singleton Pattern limits the number of instances of a particular object to just one. 
    This single instance is called the singleton.

    Singletons are useful in situations where system-wide actions need to be coordinated from a 
    single central place. An example is a database connection pool. The pool manages the 
    creation, destruction, and lifetime of all database connections for the entire application 
    ensuring that no connections are 'lost'.

*/

var TaskRepo = (function () {
    var taskRepo;

    function createRepo() {
        var taskRepo = new Object('Task');

        return taskRepo;
    }

    return {
        getInstance: function () {
            if (!taskRepo) {
                taskRepo = createRepo();
            }
            
            return taskRepo;
        }
    }
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
    console.log('Same TaskRepo');
}