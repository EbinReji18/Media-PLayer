import React from 'react'

function History() {
  return (
    <>
    <div className="p-5">
      <h1>Watch History</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Video ID</th>
            <th>Title</th>
            <th>Video URL</th>
            <th>Date and Time</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>BIG DAWS</td>
            <td>https://example.com/video1</td>
            <td>2024-08-14</td>
            <td><button className='btn'>
              <i className="fa-solid fa-trash" style={{color: "#df0c36",}} />
              </button>
            </td>
          </tr>
        </tbody>

      </table>

    </div>

    </>
  )
}

export default History