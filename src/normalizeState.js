export const normalizeState = (projectsntasks) => {
    let normalizedState = {};

    normalizedState.projectsById = projectsntasks.reduce((projects, item) => {
        projects[item.id] = {
            id: item.id,
            name: item.name,
            tasksIds: item.tasks.map((task) => task.id),
        };
        return projects;
    }, {});

    normalizedState.tasksById = projectsntasks
        .reduce((projects, item) => {
            projects = [...projects, ...item.tasks];
            return projects;
        }, [])
        .reduce((tasks, item) => {
            tasks[item.id] = item;
            return tasks;
        }, {});

    return normalizedState;
};