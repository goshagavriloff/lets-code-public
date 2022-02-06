/**
 * @param {number} length
 */
function SnapshotArray(length) {
    let t = 0;
    let a = [new Map()];  // snap_id length array
    return {
        set,
        snap,
        get
    }
​
    function set(idx, v) {
        a[t].set(idx, v); // set with snap_id index,  [{idx: v}, {}, {} ....]
    }
​
    function snap() {
        a.push(new Map()); // each snap enlarge the array
        t++;
        return t - 1;
    }
​
    function get(idx, snap_id) {
        for (let i = snap_id; ~i; i--) { // from current snap_id -> intial snap_id 0, find the most closest value
            if (a[i].has(idx)) {
                return a[i].get(idx);
            }
        }
        return 0; // not found intial values 0
    }
};
/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
