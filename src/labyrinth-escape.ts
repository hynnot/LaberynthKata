export class LabyrinthEscape {
  private labyrinth: string[][] = []
  private startPosition: [number, number] | null = null
  private exitPosition: [number, number] | null = null

  constructor(labyrinth: string[][]) {
    this.validateLabyrinth(labyrinth)
    this.labyrinth = labyrinth    
  }

  findShortestPath(): number {
    return 1
  }

  private validateLabyrinth(labyrinth: string[][]): void {
    if (!labyrinth || labyrinth.length === 0 || labyrinth[0].length === 0) {
      throw new Error("Labyrinth cannot be empty")
    }

    this.findAndValidatePositions(labyrinth)
  }

  private findAndValidatePositions(labyrinth: string[][]): void {
    let startCount = 0
    let exitCount = 0
    const validCells = new Set(['S', 'E', '0', '1'])

    for (let row = 0; row < labyrinth.length; row++) {
      for (let col = 0; col < labyrinth[row].length; col++) {
        const cell = labyrinth[row][col]
        
        if (!validCells.has(cell)) {
          throw new Error(`Invalid cell value found: ${cell}`)
        }
        
        if (cell === 'S') {
          this.startPosition = [row, col]
          startCount++
        } else if (cell === 'E') {
          this.exitPosition = [row, col]
          exitCount++
        }
      }
    }

    if (startCount !== 1) {
      throw new Error("Labyrinth must contain exactly one start position 'S'")
    }

    if (exitCount !== 1) {
      throw new Error("Labyrinth must contain exactly one exit position 'E'")
    }

    this.validateBorderPositions(labyrinth)
  }

  private validateBorderPositions(labyrinth: string[][]): void {
    const rows = labyrinth.length
    const cols = labyrinth[0].length

    const isOnBorder = (row: number, col: number): boolean => {
      return row === 0 || row === rows - 1 || col === 0 || col === cols - 1
    }

    if (!isOnBorder(this.startPosition![0], this.startPosition![1])) {
      throw new Error("Start position 'S' must be on the border")
    }

    if (!isOnBorder(this.exitPosition![0], this.exitPosition![1])) {
      throw new Error("Exit position 'E' must be on the border")
    }
  }

}
