export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { data }
    })
);

export const signup = user => (
    $.ajax({
        url: '/api/users',
        method: '/api/users',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)
