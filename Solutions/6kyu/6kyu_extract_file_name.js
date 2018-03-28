class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        var name = dirtyFileName.split(/[0-9]+_|[.]/);
        return name[1] + "." + name[2];
    }
}