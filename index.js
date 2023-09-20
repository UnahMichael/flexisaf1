 // ES6 features

        // Initialize an array to store tasks
        const tasks = [];

        // Function to render tasks
        const renderTasks = () => {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.textContent = `${index + 1}. ${task}`;
                taskList.appendChild(li);
            });
        };

        // Add task event listener
        const addTaskButton = document.getElementById("addTask");
        addTaskButton.addEventListener("click", () => {
            const taskInput = document.getElementById("taskInput");
            const task = taskInput.value.trim();

            if (task !== "") {
                tasks.push(task);
                taskInput.value = "";
                renderTasks();
            }
        });

        // Initial rendering
        renderTasks();