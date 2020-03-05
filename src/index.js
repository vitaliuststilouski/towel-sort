// You should implement your task here.

module.exports = function towelSort(matrix) {
        if(matrix === undefined) {
            return []
        }

        const newArray = matrix.map((el, index) => {
            if (index % 2 !== 0) {
                return el.reverse();
            }
            return el;
        })

        const result = newArray.reduce((conc, el) => {
            return conc.concat(el)
        }, [])
        return result;
}
