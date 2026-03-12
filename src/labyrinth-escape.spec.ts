import { expect, beforeEach, describe, it } from "@jest/globals"
import { LabyrinthEscape } from "./labyrinth-escape"

describe("Labyrinth Escape", () => {

  let labyrinthEscape: LabyrinthEscape

  describe("Create Laberynth", () => {

    it("should throw error for empty labyrinth in constructor", () => {
      expect(() => {
        new LabyrinthEscape([])
      }).toThrow("Labyrinth cannot be empty")
    })

    it("should throw error when no start position found in constructor", () => {
      const labyrinth: string[][] = [["0", "E"]]
      expect(() => {
        new LabyrinthEscape(labyrinth)
      }).toThrow("Labyrinth must contain exactly one start position 'S'")
    })

    it("should throw error when no exit position found in constructor", () => {
      const labyrinth: string[][] = [["S", "0"]]
      expect(() => {
        new LabyrinthEscape(labyrinth)
      }).toThrow("Labyrinth must contain exactly one exit position 'E'")
    })

    it("should throw error when multiple start positions found in constructor", () => {
      const labyrinth: string[][] = [["S", "S"]]
      expect(() => {
        new LabyrinthEscape(labyrinth)
      }).toThrow("Labyrinth must contain exactly one start position 'S'")
    })

    it("should throw error when multiple exit positions found in constructor", () => {
      const labyrinth: string[][] = [["S", "E", "E"]]
      expect(() => {
        new LabyrinthEscape(labyrinth)
      }).toThrow("Labyrinth must contain exactly one exit position 'E'")
    })

    it("should throw error for invalid cell values", () => {
      const labyrinth: string[][] = [["S", "X", "E"]]
      expect(() => {
        labyrinthEscape = new LabyrinthEscape(labyrinth)
      }).toThrow("Invalid cell value found: X")
    })

    it("should throw error when S is not on the border", () => {
      const labyrinth: string[][] = [
        ["0", "0", "0"],
        ["0", "S", "0"],
        ["0", "0", "E"]
      ]
      expect(() => {
        labyrinthEscape = new LabyrinthEscape(labyrinth)
      }).toThrow("Start position 'S' must be on the border")
    })

    it("should throw error when E is not on the border", () => {
      const labyrinth: string[][] = [
        ["S", "0", "0"],
        ["0", "E", "0"],
        ["0", "0", "1"]
      ]
      expect(() => {
        labyrinthEscape = new LabyrinthEscape(labyrinth)
      }).toThrow("Exit position 'E' must be on the border")
    })

    it("should create LabyrinthEscape instance with labyrinth", () => {
      const labyrinth: string[][] = [["S", "E"]]
      expect(() => {
        labyrinthEscape = new LabyrinthEscape(labyrinth)
      }).not.toThrow()
      expect(labyrinthEscape).toBeInstanceOf(LabyrinthEscape)
    })

    it("should create labyrinth when S and E are on borders in 3x3 grid", () => {
      const labyrinth: string[][] = [
        ["S", "0", "E"],
        ["1", "1", "0"],
        ["0", "0", "0"]
      ]
      expect(() => {
        labyrinthEscape = new LabyrinthEscape(labyrinth)
      }).not.toThrow()
      expect(labyrinthEscape).toBeInstanceOf(LabyrinthEscape)
    })

  })

  describe("Find Shortest Path", () => {

    it("should return 1 for adjacent S and E horizontally", () => {
      const labyrinth: string[][] = [["S", "E"]]
      labyrinthEscape = new LabyrinthEscape(labyrinth)
      const result = labyrinthEscape.findShortestPath()
      expect(result).toBe(1)
    })

  })

})
