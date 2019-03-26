import {Colors} from "../constants/board"

export function getColorByPosition(column, row) {
  if (isWhite(column, row)) {
    return Colors.WHITE
  }
  return Colors.BLACK
}

function isWhite(column, row) {
  if (((row.charCodeAt(0) + parseInt(column)) % 2) === 1) {
    return true
  }
  return false
}

