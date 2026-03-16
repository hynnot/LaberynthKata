#!/usr/bin/env node

/**
 * Labyrinth Escape CLI
 *
 * Command-line interface for solving the Labyrinth Escape challenge.
 * This tool finds the shortest path from start (S) to exit (E) in a 2D maze.
 *
 */

import { LabyrinthEscape } from './labyrinth-escape'

interface CLIArguments {
  labyrinth?: string[][]
  help?: boolean
}

/**
 * Parses command line arguments
 * @returns Parsed arguments object
 */
function parseArguments(): CLIArguments {
  const args = process.argv.slice(2)

  if (args.includes('--help') || args.includes('-h')) {
    return { help: true }
  }

  if (args.length === 0) {
    return {}
  }

  try {
    const labyrinthJson = args[0]
    const labyrinth = JSON.parse(labyrinthJson) as string[][]
    return { labyrinth }
  } catch (error) {
    console.error('Error parsing labyrinth JSON:', error)
    return {}
  }
}

/**
 * Prints help information with usage examples and labyrinth format
 */
function printHelp(): void {
  console.log(`
Labyrinth Escape CLI

USAGE:
  node dist/cli.js '<labyrinth-json>'
  npm run cli -- '<labyrinth-json>'

LABYRINTH FORMAT:
  JSON 2D array where each cell can be:

  - "S": Start position (must be on border)
  - "E": Exit position (must be on border)
  - "0": Open path (can move through)
  - "1": Wall (cannot move through)

EXAMPLES:
  # Simple case - adjacent S and E
  npm run cli -- '[["S","E"]]'

  # Example from challenge - should return 8
  npm run cli -- '[["S","0","1","0","E"],["1","0","1","0","1"],["1","0","0","0","0"],["0","0","1","1","1"],["0","0","0","0","0"]]'

  # No path possible - should return -1
  npm run cli -- '[["S","1"],["1","E"]]'

OUTPUT:
  Returns the length of the shortest path from S to E.
  If no path exists, returns -1.
`)
}

/**
 * Main CLI execution function
 */
function runCLI(): void {
  const args = parseArguments()

  if (args.help) {
    printHelp()
    process.exit(0)
  }

  if (!args.labyrinth) {
    console.error('Error: No labyrinth provided')
    console.error('Use --help for usage information')
    process.exit(1)
  }

  try {
    const labyrinthEscape = new LabyrinthEscape(args.labyrinth)
    const result = labyrinthEscape.findShortestPath()
    console.log(result)
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : String(error))
    process.exit(1)
  }
}

if (require.main === module) {
  runCLI()
}

export { runCLI }
