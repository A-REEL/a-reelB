<html>
<head>
    <style>
        canvas {
            border: 1px solid #000;
        }
    </style>
</head>
<body>
    <canvas id="myCanvas" width="400" height="400"></canvas>
    <button onclick="addShape()">Add Task</button>
    <button onclick="clearCanvas()">Clear Canvas</button>

    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        const shapes = [];

        let selectedShape = null; // Track the currently selected shape

        // Function to draw shapes on the canvas
        function drawShapes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

            for (const shape of shapes) {
                ctx.fillStyle = shape.color;
                ctx.fillRect(shape.x, shape.y, shape.width, shape.height);

                // Add text comments to shapes
                ctx.fillStyle = 'black';
                ctx.fillText(shape.comment, shape.x + 5, shape.y + 15);
            }
        }

        // Function to add a shape
        function addShape() {
            const shape = {
                x: Math.random() * (canvas.width - 50),
                y: Math.random() * (canvas.height - 50),
                width: 50,
                height: 50,
                color: getRandomColor(),
                comment: '', // Initialize with an empty comment
            };

            shapes.push(shape);
            drawShapes();
            saveShapes(); // Save the shapes when a new one is added
        }

        // Function to generate a random color
        function getRandomColor() {
            return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        }

        // Function to save the shapes to local storage
        function saveShapes() {
            localStorage.setItem('shapes', JSON.stringify(shapes));
        }

        // Function to load the saved shapes
        function loadShapes() {
            const savedShapes = localStorage.getItem('shapes');
            if (savedShapes) {
                shapes.length = 0; // Clear the current shapes array
                shapes.push(...JSON.parse(savedShapes));
                drawShapes();
            }
        }

        // Function to clear the canvas and local storage
        function clearCanvas() {
            shapes.length = 0; // Clear the shapes array
            localStorage.removeItem('shapes'); // Remove saved shapes
            drawShapes(); // Clear the canvas
        }

        // Event listener for mouse down on the canvas
        canvas.addEventListener('mousedown', (e) => {
            const mouseX = e.clientX - canvas.getBoundingClientRect().left;
            const mouseY = e.clientY - canvas.getBoundingClientRect().top;

            // Check if the mouse click is inside any shape
            for (const shape of shapes) {
                if (
                    mouseX >= shape.x &&
                    mouseX <= shape.x + shape.width &&
                    mouseY >= shape.y &&
                    mouseY <= shape.y + shape.height
                ) {
                    selectedShape = shape;
                    const offsetX = mouseX - shape.x;
                    const offsetY = mouseY - shape.y;

                    // Add event listeners for mouse move and mouse up to enable dragging
                    document.addEventListener('mousemove', moveShape);
                    document.addEventListener('mouseup', releaseShape);

                    selectedShape.offsetX = offsetX;
                    selectedShape.offsetY = offsetY;

                    break;
                }
            }
        });

        // Function to handle the shape movement while dragging
        function moveShape(e) {
            if (selectedShape) {
                const mouseX = e.clientX - canvas.getBoundingClientRect().left;
                const mouseY = e.clientY - canvas.getBoundingClientRect().top;
                selectedShape.x = mouseX - selectedShape.offsetX;
                selectedShape.y = mouseY - selectedShape.offsetY;
                drawShapes();
            }
        }

        // Function to release the selected shape
        function releaseShape() {
            selectedShape = null;
            document.removeEventListener('mousemove', moveShape);
            document.removeEventListener('mouseup', releaseShape);
            saveShapes(); // Save the updated positions
        }

        // Load saved shapes when the page loads
        loadShapes();
    </script>
</body>
</html>
