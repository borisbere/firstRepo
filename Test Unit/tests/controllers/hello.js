describe("probando controlador hello", function()
{
    beforeEach(module("app"));
 
    describe("helloCtrl", function()
    {
        var scope, ctrl;
 
        beforeEach(inject(function($rootScope, $controller)
        {
            scope = $rootScope.$new();
            ctrl = $controller("helloCtrl", {$scope:scope});
        }));
 
        it("debe estar definida una variable hello", function()
        {
            var a = 15;
            var b = null;
            var array = [5, 'the', 21];
            var message = "hi globant bootcamp"
            expect(scope.hello).toBeDefined();
            expect(scope.hello1).toBe('5');
            expect(scope.hello2).toBe(true);
            expect(false).not.toBe(true);
            expect(scope.hello3).toEqual(10);
            expect(a).toEqual(scope.hello4);
            expect(message).toMatch(/globant/);
            expect(message).toMatch("bootcamp");
            expect(message).not.toMatch("hello");
            expect(a).not.toBeUndefined;
            expect(b).toBeNull;
            expect(a).toBeTruthy();
            expect(message).not.toBeFalsy();
            expect(array).toContain('the');
            expect(a).toBeLessThan(20);
        })
    })
})