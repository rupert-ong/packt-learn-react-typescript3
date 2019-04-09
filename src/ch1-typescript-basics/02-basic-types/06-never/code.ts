function foreverTask(taskName: string): never {
  while (true) {
    console.log(`Doing ${taskName} forever...`);
    // break;
  }
}
