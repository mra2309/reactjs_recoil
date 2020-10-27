import React from 'react';
import { useRecoilState } from 'recoil';
import { theme } from '../store'

function Home() {
    const [currentTheme, setCurrentTheme] = useRecoilState(theme)
    const defaultTheme = currentTheme == 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <select name="" id="" className="form-control" value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)}>
                            <option value="dark">Dark</option>
                            <option value="Light">Light</option>
                        </select>
                    </div>
                </div>
            </div>
    )
}

export default Home;