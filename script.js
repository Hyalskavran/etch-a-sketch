const popup = document.querySelector('#popup')

const deleteGrid = () => {
    // Deletes existing grid
    const grid = document.querySelector('.grid')
    grid.remove()
}

const drawGrid = () => {
    // First delete the existing grid
    deleteGrid()

    // Create a new grid, add the css style to it and append it after the popup button
    const newGrid = document.createElement('div')
    newGrid.classList.add('grid')
    
    popup.insertAdjacentElement('afterend', newGrid)
}

const drawSquares = (gridSize = 16) => {
    // First draw the grid
    drawGrid()

    // Find the grid and adjust its properties ( size )
    const grid = document.querySelector('.grid')
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    // Draw the squares
    for (let i = 0; i < (parseInt(gridSize) * parseInt(gridSize)); i++) {
        
        let square = document.createElement('div')
        square.classList.add('square')
    
        grid.appendChild(square)
    }

    // Make the black background stay once hovered
    const squares = document.querySelectorAll('.square')

    squares.forEach(function (square) {
        square.addEventListener('mouseenter', function() {
            square.classList.add('square-hover')
        })
    })
}

// Draw the initial grid
drawSquares()

// Ask user to input the new grid size
popup.addEventListener('click', function() {
    let size = window.prompt('Please define the grid size (Max 100 squares)', '100')

    drawSquares(size)
})