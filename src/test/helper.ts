import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

export class TempFile {
  private tempDir: string
  private tempFilePath: string

  constructor(public fileContents: string) {
    this.tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vscode-test-'))
    this.tempFilePath = path.join(this.tempDir, 'test.js')

    this.createTempFile()
  }

  get filePath(): string {
    return this.tempFilePath
  }

  get actualContents(): string {
    /* Make sure to update te document before accessing the actualContents */
    return fs.readFileSync(this.tempFilePath, 'utf8')
  }

  private createTempFile() {
    try {
      fs.writeFileSync(this.tempFilePath, this.fileContents)
    } catch (error) {
      console.log('Error occured while creating file!', error)
    }
  }

  removeTempFile() {
    try {
      fs.unlinkSync(this.tempFilePath)
      fs.rmdirSync(this.tempDir)
    } catch (error) {
      console.log('Error while cleaning up files', error)
    }
  }
}
