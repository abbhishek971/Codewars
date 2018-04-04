function loop_size(node)
{
    var slo = node;
    var fast = node.next;
    var size = 0;
    while(slo !== fast)
    {
      slo = slo.next;
      fast = fast.next.next;
    }
    size++; slo = slo.next;
    while(slo!==fast)
    {
      size++; slo = slo.next;
    }
    return size;
}